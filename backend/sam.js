const xlsx = require("xlsx");

// Load Excel file from your path
const workbook = xlsx.readFile("C:/Users/bunny/Downloads/Book1.xlsx");
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Convert to JSON with raw values
const data = xlsx.utils.sheet_to_json(sheet, { raw: true });

// Function: Excel serial -> YYYY-MM-DD
function excelSerialToDate(serial) {
  const excelEpoch = new Date(Date.UTC(1899, 11, 30)); // 1899-12-30 base
  const jsDate = new Date(excelEpoch.getTime() + serial * 86400 * 1000);
  return jsDate.toISOString().split("T")[0];
}

// Function: string like "9/5/06" -> YYYY-MM-DD
function stringToDate(str) {
  const parts = str.split(/[\/\-]/).map((p) => parseInt(p, 10));
  if (parts.length === 3) {
    let [m, d, y] = parts;
    if (y < 100) y += 2000; // fix 2-digit year
    return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  }
  return str;
}

// Process rows
data.forEach((row) => {
  // Find the actual column name dynamically
  const dobKey = Object.keys(row).find((k) => k.toLowerCase().includes("date of birth"));
  if (dobKey) {
    const value = row[dobKey];
    if (typeof value === "number") {
      row[dobKey] = excelSerialToDate(value);
    } else if (typeof value === "string") {
      row[dobKey] = stringToDate(value);
    }
  }
  console.log(row);
});
