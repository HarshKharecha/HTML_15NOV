import React from 'react'

function StudentReportCard() {
    const styles = {
        container: { display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' },
        card: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', width: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
        title: { fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' },
        subtitle: { fontSize: '1.2rem', fontWeight: '700', color: '#1e293b', display: 'flex', flexDirection: 'column', gap: '9px' }
    };

    const students = [
        { id: 'S_001', name: 'Peter Parker', subject: 'Physics', marks: 95 },
        { id: 'S_002', name: 'Gwen Stacy', subject: 'Biochemistry', marks: 98 },
        { id: 'S_003', name: 'Aarav Sharma', subject: 'Mathematics', marks: 94.5 },
        { id: 'S_004', name: 'Ananya Iyer', subject: 'Physics', marks: 88.2 },
        { id: 'S_005', name: 'Kabir Mehta', subject: 'Chemistry', marks: 91.0 },
        { id: 'S_006', name: 'Diya Nair', subject: 'Biology', marks: 91.0 },
        { id: 'S_007', name: 'Miles Morales', subject: 'Art & Design', marks: 88 },
        { id: 'S_008', name: 'Vivaan Joshi', subject: 'Computer Science', marks: 85.0 }
    ];

    return (
        <>
            <h2>Student Report Card:</h2>
            <div style={styles.container}>
                {students.map((data) => {
                    const studentmark = data.marks;
                    const grade = studentmark >= 75 ? 'Pass' : 'Fail';

                    return (
                        <div key={data.id} style={styles.card}>
                            <div style={styles.subtitle}>
                                <div>Student Name: {data.name}</div>
                                <div>Subject: {data.subject}</div>
                                <div>Marks: {studentmark}</div>
                                <div>Grade: {grade}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default StudentReportCard