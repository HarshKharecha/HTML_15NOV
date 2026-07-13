import React, { useState } from 'react'

function StudentRegistrationForm() {
    const [studentName, setStudentName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [course, setCourse] = useState('');

    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save the inputs to the submitted data state
        setSubmittedData({
            name: studentName.trim() || '---',
            email: email.trim() || '---',
            mobile: mobileNumber.trim() || '---',
            course: course.trim() || '---'
        });

        setStudentName('');
        setEmail('');
        setMobileNumber('');
        setCourse('');
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px', fontFamily: 'Arial, sans-serif' }}>
            <h3>Task 20: Student Registration Form</h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
                <input
                    type="text"
                    placeholder="Student Name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Course Name"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    required
                />
                <button type="submit" style={{ padding: '8px', cursor: 'pointer', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>Submit</button>
            </form>

            <hr style={{ margin: '20px 0' }} />

            <h4>Live Form Output Data:</h4>
            <p><strong>Name:</strong> {studentName || '---'}</p>
            <p><strong>Email:</strong> {email || '---'}</p>
            <p><strong>Mobile:</strong> {mobileNumber || '---'}</p>
            <p><strong>Course:</strong> {course || '---'}</p>

            {submittedData ? (
                <div>
                    <h4>Files Up Details:</h4>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Mobile:</strong> {submittedData.mobile}</p>
                    <p><strong>Course:</strong> {submittedData.course}</p>
                </div>
            ) : (
                <p style={{ color: '#666', fontStyle: 'italic' }}>No data submitted yet. Fill out the form and click Submit.</p>
            )}
        </div>
    )
}

export default StudentRegistrationForm