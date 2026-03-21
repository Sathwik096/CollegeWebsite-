import React, { useState } from 'react';
import axios from 'axios';

function AddStudent() {
    const [file, setFile] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const onDrop = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadFile = async () => {
        if (!file) {
            console.error('No file selected.');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('http://localhost:3000/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log('File uploaded successfully!');
            alert("Student Details Added Successfully");
            setSuccessMessage('File uploaded successfully!');
        } catch (error) {
            console.error('Error uploading file:', error);
            alert("Data format violated or Duplicate data entered!!!");
            setSuccessMessage(null); 
        }
    };

    const downloadExcelTemplate = () => {
        const templateUrl = process.env.PUBLIC_URL + '/details.xlsx';
        const link = document.createElement('a');
        link.href = templateUrl;
        link.download = 'Book1.xlsx';
        link.click();
    };

    const processSixthSemester = async () => {
        try {
            await axios.post('http://localhost:3000/processSixthSemester');
            console.log('Sixth-semester students processed successfully!');
            setSuccessMessage('Sixth-semester students processed successfully!');
            alert("Student Proccessed Successfully")
        } catch (error) {
            console.error('Error processing sixth-semester students:', error);
            setSuccessMessage(null); 
            alert("Error in proccessing students")
        }
    };

    return (
        <>
            {successMessage && (
                <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center', padding: '10px', marginBottom: '10px' }}>
                    {successMessage}
                </div>
            )}
            <div style={{ backgroundColor: 'white', padding: '20px', marginTop: '20px', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ padding: '20px', backgroundColor: 'white' }}>Download The Template</h2>
                <button type="button" onClick={downloadExcelTemplate} className='btn btn-primary p-10'>
                    Download Excel Template
                </button>
            </div>
            <div className="container mt-5">
                <div className="card p-4">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile" onChange={onDrop} />
                        <label className="custom-file-label" htmlFor="customFile">
                            {file ? file.name : 'Choose file'}
                        </label>
                    </div>
                    <button className="btn btn-success mt-3" onClick={uploadFile}>
                        Upload
                    </button>
                    <button className="btn btn-primary mt-3 ml-3" onClick={processSixthSemester}>
                        Process Sixth Semester
                    </button>
                </div>
            </div>
        </>
    );
}

export default AddStudent;