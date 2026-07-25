const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const xlsx = require('xlsx');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const moment = require('moment');

const Faculty = require('./models/Faculty');

const app = express();
const PORT = process.env.PORT || 3000;

// Simple health check route to verify server is running on the root URL
app.get('/', (req, res) => {
  res.send('Government College Hyderabad API is running!');
});

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

// ─── MongoDB Connection ───────────────────────────────────────────────────────
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/FacultyManagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// ─── MySQL Connection ─────────────────────────────────────────────────────────
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Sathwik',
  database: process.env.DB_NAME || 'collegegpt',
  waitForConnections: true,
  dateStrings: true,
});

pool.getConnection((err, connection) => {
  if (err) console.error('MySQL connection error:', err);
  else {
    console.log('MySQL connected successfully');
    connection.release();
  }
});

// ═════════════════════════════════════════════════════════════════════════════
// FACULTY ROUTES (MongoDB)
// ═════════════════════════════════════════════════════════════════════════════

app.get('/api/faculty/download-template', (req, res) => {
  const templateData = [
    ['PIN', 'biometricID', 'name', 'department', 'degree', 'experience', 'mobile', 'email'],
  ];
  const ws = xlsx.utils.aoa_to_sheet(templateData);
  const wb = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, ws, 'Faculty Template');
  const buffer = xlsx.write(wb, { bookType: 'xlsx', type: 'buffer' });
  res.setHeader('Content-Disposition', 'attachment; filename=faculty_template.xlsx');
  res.type('application/octet-stream').send(buffer);
});

app.post('/api/faculty/add-faculty', upload.single('facultyFile'), async (req, res) => {
  try {
    const fileBuffer = req.file.buffer;
    const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const facultyData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    await Faculty.insertMany(facultyData);
    res.status(200).send('Faculty data added successfully!');
  } catch (error) {
    console.error('Error adding faculty:', error);
    res.status(500).send('Error adding faculty. Please try again.');
  }
});

app.delete('/api/faculty/remove-faculty/:pin', async (req, res) => {
  const { pin } = req.params;
  try {
    await Faculty.deleteOne({ PIN: pin });
    res.status(200).send(`Faculty with PIN ${pin} removed successfully!`);
  } catch (error) {
    res.status(500).send('Error removing faculty. Please try again.');
  }
});

app.get('/api/faculty/get-faculty', async (req, res) => {
  try {
    const facultyData = await Faculty.find();
    res.status(200).json(facultyData);
  } catch (error) {
    res.status(500).send('Error getting faculty data. Please try again.');
  }
});

app.put('/api/faculty/update-faculty/:pin', async (req, res) => {
  const { pin } = req.params;
  const updatedFacultyData = req.body;
  try {
    await Faculty.updateOne({ PIN: pin }, { $set: updatedFacultyData });
    res.status(200).send(`Faculty with PIN ${pin} updated successfully!`);
  } catch (error) {
    res.status(500).send('Error updating faculty. Please try again.');
  }
});

// ═════════════════════════════════════════════════════════════════════════════
// STUDENT & ATTENDANCE ROUTES (MySQL)
// ═════════════════════════════════════════════════════════════════════════════

// ── Helpers ──────────────────────────────────────────────────────────────────
function formatExcelDate(value) {
  if (value == null) return null;
  let jsDate;
  if (value instanceof Date) jsDate = value;
  else if (typeof value === 'number') {
    const excelEpoch = new Date(Date.UTC(1900, 0, 1));
    jsDate = new Date(excelEpoch.getTime() + (value - 2) * 86400000);
  } else if (typeof value === 'string') jsDate = new Date(value);
  else return null;
  if (isNaN(jsDate.getTime())) return null;
  const year = jsDate.getFullYear();
  const month = String(jsDate.getMonth() + 1).padStart(2, '0');
  const day = String(jsDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatDate(inputDate) {
  const d = new Date(inputDate);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}_${month}_${year}`;
}

let storedDepartment, storedSemester, storedSubject, storedShift;

// ── Upload Students ───────────────────────────────────────────────────────────
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const rows = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1, defval: null });
    const headers = rows[0].map(h => h ? h.toString().trim().toLowerCase() : '');
    const excelData = rows.slice(1).map(row => {
      let obj = {};
      row.forEach((cell, i) => { obj[headers[i]] = cell; });
      return obj;
    });
    const dobKey = headers.find(h => h.includes('date of birth'));
    for (const row of excelData) {
      const formattedDate = formatExcelDate(row[dobKey]);
      const query = `INSERT INTO student_details (s_id,sname,DOB,s_father,phone_no,address,semester,department,aadhaar,email) VALUES (?,?,?,?,?,?,?,?,?,?)`;
      pool.query(query, [row['pin'], row['name'], formattedDate, row['father name'], row['mobile no'], row['address'], row['semester'], row['department'], row['aadhaar'], row['email id']], (err) => {
        if (!err) pool.query('INSERT INTO attendance (s_id) VALUES (?)', [row['pin']], () => {});
      });
    }
    res.status(200).send('Data imported successfully!');
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

// ── Get Students ──────────────────────────────────────────────────────────────
app.get('/getstudents', async (req, res) => {
  const { semester, department } = req.query;
  const dept = department ? department.toLowerCase() : null;
  const q = 'SELECT * FROM student_details WHERE s_id LIKE ? AND department = ? UNION SELECT * FROM completed_students WHERE s_id LIKE ? AND department = ?';
  pool.query(q, [`%${semester}%`, dept, `%${semester}%`, dept], (err, result) => {
    if (err) res.status(500).json({ error: err.message });
    else res.status(200).json(result || []);
  });
});

app.put('/editstudent/:studentId', (req, res) => {
  const { studentId } = req.params;
  pool.query('UPDATE student_details SET ? WHERE s_id = ?', [req.body, studentId], (error) => {
    if (error) res.status(500).json({ error: 'Error updating student' });
    else res.status(200).json({ message: 'Student updated successfully' });
  });
});

app.delete('/deletestudent/:id', (req, res) => {
  pool.query('DELETE FROM student_details WHERE s_id = ?', [req.params.id], (err) => {
    if (err) res.status(500).send('Error deleting student');
    else res.status(200).send('Student deleted successfully');
  });
});

app.post('/processSixthSemester', (req, res) => {
  pool.query('INSERT INTO completed_students SELECT * FROM student_details WHERE semester = 6', [], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    pool.query('DELETE FROM student_details WHERE semester = 6', [], (err2) => {
      if (err2) return res.status(500).json({ error: err2.message });
      res.status(200).json({ message: 'Sixth-semester students processed successfully!' });
    });
  });
});

app.post('/api/updateAllSemesters', (req, res) => {
  pool.query('UPDATE student_details SET semester = CASE WHEN semester < 6 THEN semester + 1 ELSE semester END', [], (err) => {
    if (err) res.status(500).json({ error: 'Internal Server Error' });
    else res.json({ message: 'All student semesters updated successfully.' });
  });
});

// ── Student Details / Attendance ──────────────────────────────────────────────
app.route('/api/student_details')
  .post((req, res) => {
    const { department, semester, subject, shift } = req.body;
    storedDepartment = department; storedSemester = semester;
    storedSubject = subject; storedShift = shift;
    const query = shift == '1'
      ? "SELECT * FROM student_details WHERE CAST(SUBSTRING_INDEX(SUBSTRING_INDEX(s_id,'-',-1),'-',1) AS SIGNED)<=60 AND department=? HAVING semester=?"
      : "SELECT * FROM student_details WHERE CAST(SUBSTRING_INDEX(SUBSTRING_INDEX(s_id,'-',-1),'-',1) AS SIGNED)>60 AND department=? HAVING semester=?";
    pool.query(query, [department, semester], (err, results) => {
      if (err) res.status(500).send('Internal Server Error');
      else res.json(results);
    });
  })
  .get((req, res) => {
    const query = storedShift == '1'
      ? "SELECT * FROM student_details WHERE CAST(SUBSTRING_INDEX(SUBSTRING_INDEX(s_id,'-',-1),'-',1) AS SIGNED)<=60 AND department=? HAVING semester=?"
      : "SELECT * FROM student_details WHERE CAST(SUBSTRING_INDEX(SUBSTRING_INDEX(s_id,'-',-1),'-',1) AS SIGNED)>60 AND department=? HAVING semester=?";
    pool.query(query, [storedDepartment, storedSemester], (err, results) => {
      if (err) res.status(500).send('Internal Server Error');
      else res.json(results);
    });
  });

app.get('/api/departments', (req, res) => {
  pool.query('SELECT * FROM department', (err, results) => {
    if (err) res.status(500).send('Internal Server Error');
    else res.json(results);
  });
});

app.get('/api/attendance', (req, res) => {
  const { startDate, endDate, studentId } = req.query;
  if (!studentId) return res.status(400).json({ error: 'Missing required parameters' });
  const dateColumns = [];
  const currentDate = new Date(startDate);
  while (currentDate <= new Date(endDate)) {
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    dateColumns.push(`\`${day}_${month}_${year}\``);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  const selectColumns = ['s_id', ...dateColumns].join(', ');
  const query = (!startDate && !endDate)
    ? 'SELECT * FROM attendance WHERE s_id = ?'
    : `SELECT ${selectColumns} FROM attendance WHERE s_id = ?`;
  pool.query(query, [studentId], (err, results) => {
    if (err) res.status(500).json({ error: 'Internal Server Error' });
    else res.json(results);
  });
});

app.post('/api/submit_attendance', async (req, res) => {
  const { attendanceStatusArray } = req.body;
  const sem = storedSemester + storedDepartment + storedShift;
  const newColumnName = storedSubject;
  try {
    const s_ids = await new Promise((resolve, reject) => {
      const query = storedShift == '1'
        ? "SELECT * FROM student_details WHERE CAST(SUBSTRING_INDEX(SUBSTRING_INDEX(s_id,'-',-1),'-',1) AS SIGNED)<=60 AND department=? HAVING semester=? ORDER BY s_id"
        : "SELECT * FROM student_details WHERE CAST(SUBSTRING_INDEX(SUBSTRING_INDEX(s_id,'-',-1),'-',1) AS SIGNED)>60 AND department=? HAVING semester=? ORDER BY s_id";
      pool.query(query, [storedDepartment, storedSemester], (err, result) => {
        if (err) reject(err);
        else resolve(result.map(r => r.s_id));
      });
    });

    await new Promise((resolve, reject) => {
      pool.query(`CREATE TABLE IF NOT EXISTS ${sem} (s_id varchar(12) primary key)`, [], (err) => {
        if (err) reject(err); else resolve();
      });
    });

    await new Promise((resolve, reject) => {
      const values = s_ids.map(id => [id]);
      pool.query(`INSERT IGNORE INTO ${sem} (s_id) VALUES ?`, [values], (err) => {
        if (err) reject(err); else resolve();
      });
    });

    await new Promise((resolve, reject) => {
      pool.query(`ALTER TABLE ${sem} ADD COLUMN ${newColumnName} VARCHAR(1)`, [], (err) => {
        if (err) { reject(err); return; }
        const updateQuery = `UPDATE ${sem} SET ${newColumnName} = CASE ${s_ids.map(id => `WHEN s_id = '${id}' THEN ?`).join(' ')} END`;
        pool.query(updateQuery, attendanceStatusArray, (updateErr) => {
          if (updateErr) reject(updateErr); else resolve();
        });
      });
    });

    res.json({ message: 'Attendance status array received successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/date_attendance', (req, res) => {
  const { attendanceDate } = req.body;
  if (!attendanceDate) return res.status(400).json({ error: 'Missing attendance date.' });
  const date = formatDate(attendanceDate);
  const sem = storedSemester + storedDepartment + storedShift;
  pool.query(`SELECT s_id FROM ${sem}`, [], (err, result) => {
    if (err) return res.json({ message: 'Table does not exist.' });
    const s_ids = result.map(r => r.s_id);
    pool.query(`SELECT * FROM ${sem}`, [], (err2, records) => {
      if (err2) return res.json({ message: 'Table not exists.' });
      const mapped = records.map(row => { const { s_id, ...rest } = row; return Object.values(rest); });
      pool.query(`ALTER TABLE attendance ADD COLUMN ${date} VARCHAR(1) DEFAULT '-'`, [], (err3) => {
        if (err3) return res.json({ message: 'Date column already exists.' });
        s_ids.forEach((s_id, index) => {
          if (!mapped[index]) return;
          const allPresent = mapped[index].every(s => s === 'P');
          pool.query(`UPDATE attendance SET ${date} = ? WHERE s_id = ?`, [allPresent ? 'P' : 'A', s_id], () => {});
        });
        pool.query(`DROP TABLE ${sem}`, [], (err4) => {
          if (err4) console.error(err4);
          res.json({ message: 'Attendance date received successfully.' });
        });
      });
    });
  });
});

app.post('/api/holiday_attendance', (req, res) => {
  const { holidayType, holidayDate } = req.body;
  const date = formatDate(holidayDate);
  pool.query(`ALTER TABLE attendance ADD COLUMN ${date} VARCHAR(1) DEFAULT '${holidayType}'`, [], (err) => {
    if (err) res.status(500).send('Internal Server Error');
    else res.json({ message: `${date} holiday added successfully` });
  });
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
