import React from 'react'

function HospitalPatientRec() {
  const patients = [
    { id: 'P-991', name: 'Robert Downey', doctorName: 'Dr. Strange' },
    { id: 'P-992', name: 'Bruce Banner', doctorName: 'Dr. Ross' },
    { id: 'P-993', name: 'Natasha Romanoff', doctorName: 'Dr. Cho' }
  ];

  return (
    <div>
      <h2>Patient Dashboard:</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Name</th>
            <th>Assigned Doctor</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.doctorName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HospitalPatientRec