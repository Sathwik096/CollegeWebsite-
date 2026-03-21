import React from 'react'

export default function DiplomaPrograms() {
  return (
    <div className='diplomaPrograms-container'>
    <h2 style={{color:'hsl(240, 70%, 30%)',fontFamily:'times new roman'}}>Diploma Programs Offered</h2><hr />
      <table style={{ border: "2px solid #f5f5f5", textAlign: "left", width:'100%',}}>
      <style jsx>{`th,td {padding: 5px;}`}
        
      </style>
        <tr style={{backgroundColor: "hsl(205, 85%, 35%)",color: "white",padding: "10px",}}>
            <th>Program</th>
            <th>Commencement year</th>
            <th>Intake</th>
        </tr>
        <tr>
            <td>Automobile Engineering</td>
            <td>1957</td>
            <td>120</td>
        </tr>
        <tr>
            <td>Civil Engineering</td>
            <td>1957</td>
            <td>120</td>
        </tr>
        <tr>
            <td>Computer Engineering</td>
            <td>1957</td>
            <td>120</td>
        </tr>
        <tr>
            <td>Electrical and Electronics Engineering</td>
            <td>1957</td>
            <td>120</td>
        </tr>
        <tr>
            <td>Electronics and Communication Engineering</td>
            <td>1957</td>
            <td>120</td>
        </tr>
        <tr>
            <td>Mechanical Engineering</td>
            <td>1957</td>
            <td>120</td>
        </tr>
        <tr>
            <td>Pharmaceutical Engineering</td>
            <td>1957</td>
            <td>120</td>
        </tr>
      </table>
    </div>
  )
}
