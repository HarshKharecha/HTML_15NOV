import React, { useState, useEffect } from 'react';
import StudentCard from './StudentCard';

function StudentForm({ studentList = [], setStudentList, searchQuery = '', instituteName }) {
    const styles = {
        pageWrapper: { padding: '24px', fontFamily: 'sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh' },

        topLayout: {
            display: 'flex',
            flexDirection: 'row',
            gap: '24px',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            flexWrap: 'wrap',
            marginBottom: '32px'
        },

        formGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            flex: '1',
            minWidth: '300px',
            backgroundColor: '#ffffff',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            boxSizing: 'border-box'
        },

        input: { padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' },
        select: { padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', backgroundColor: '#ffffff', outline: 'none', cursor: 'pointer' },
        submitBtn: { backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '0.95rem', marginTop: 'auto' }, // Pushes button cleanly down

        previewBox: {
            backgroundColor: '#ffffff',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            flex: '1',
            minWidth: '300px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px'
        },

        previewText: { margin: '8px 0', fontSize: '0.95rem', color: '#334155' },
        cardsHeading: { color: '#1e293b', margin: '24px 0 16px 0', borderTop: '2px solid #e2e8f0', paddingTop: '20px' },
        gridContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }
    };

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [course, setCourse] = useState('');
    const [city, setCity] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('Active');

    const [editingId, setEditingId] = useState(null);

    const clearFormFields = () => {
        setImage(''); setName(''); setEmail(''); setMobile(''); setCourse(''); setCity(''); setPrice(''); setStatus(''); setStatus('Active');
    };

    const handleSubmit = () => {
        if (!name.trim() || !email.trim() || !course.trim() || !city.trim() || !price.trim()) {
            alert('Name, Email, Course, City, and Price fields are required.');
            return;
        }

        let finalPrice = price.trim();
        if (!finalPrice.startsWith('₹')) {
            finalPrice = '₹' + finalPrice;
        }

        const standardPayload = { image, name, email, mobile, course, city, price: finalPrice, status };

        if (editingId) {
            setStudentList(prev => prev.map(item => item.id === editingId ? { ...standardPayload, id: editingId } : item));
            setEditingId(null);
        } else {
            const newEntry = { ...standardPayload, id: 'S' + Date.now() };
            setStudentList(prev => [...prev, newEntry]);
        }
        clearFormFields();
    };

    const handleEditInitiate = (student) => {
        setEditingId(student.id);
        setImage(student.image || '');
        setName(student.name);
        setEmail(student.email);
        setMobile(student.mobile || '');
        setCourse(student.course);
        setCity(student.city || '');
        setPrice(student.price || '');
        setStatus(student.status || 'Active');
    };

    const handleStatusUpdate = (updatedStudent) => {
        setStudentList(prev => prev.map(item => item.id === updatedStudent.id ? updatedStudent : item));
    };

    const handleDeleteExecution = (id) => {
        if (window.confirm('Confirm registration deletion?')) {
            setStudentList(prev => prev.filter(item => item.id !== id));
            if (editingId === id) {
                setEditingId(null);
                clearFormFields();
            }
        }
    };

    const filteredStudents = studentList.filter(student => {
        const term = searchQuery.toLowerCase();
        return (
            (student.name || '').toLowerCase().includes(term) ||
            (student.email || '').toLowerCase().includes(term) ||
            (student.course || '').toLowerCase().includes(term) ||
            (student.city || '').toLowerCase().includes(term) ||
            (student.price || '').toLowerCase().includes(term) ||
            (student.status || '').toLowerCase().includes(term)
        );
    });

    return (
        <div style={styles.pageWrapper}>
            <div style={styles.topLayout}>
                <div style={styles.formGroup}>
                    <h3 style={{ margin: '0 0 5px 0', color: '#1e293b', fontSize: '1.25rem' }}>
                        {editingId ? '📝 Edit Registration' : '🎓 Student Registration'}
                    </h3>
                    <input type="url" placeholder="Photo Url" value={image} onChange={(e) => setImage(e.target.value)} style={styles.input} />
                    <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
                    <input type="tel" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={styles.input} />
                    <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} style={styles.input} />
                    <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} style={styles.input} />
                    <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} style={styles.input} />

                    <select value={status} onChange={(e) => setStatus(e.target.value)} style={styles.select}>
                        <option value="Active">🟢 Active</option>
                        <option value="Completed">🔵 Completed</option>
                    </select>

                    <button onClick={handleSubmit} style={styles.submitBtn}>
                        {editingId ? 'Update Record' : 'Submit'}
                    </button>
                </div>

                <div style={styles.previewBox}>
                    <h2 style={{ margin: '0 0 16px 0', fontSize: '1.25rem', color: '#0f172a' }}>
                        👀 Registration Live Preview
                    </h2>
                    <p style={styles.previewText}><strong>Institute:</strong> {instituteName || '---'}</p>
                    <p style={styles.previewText}><strong>Photo:</strong> {image || '---'}</p>
                    <p style={styles.previewText}><strong>Name:</strong> {name || '---'}</p>
                    <p style={styles.previewText}><strong>Email:</strong> {email || '---'}</p>
                    <p style={styles.previewText}><strong>Mobile:</strong> {mobile || '---'}</p>
                    <p style={styles.previewText}><strong>Course:</strong> {course || '---'}</p>
                    <p style={styles.previewText}><strong>Course:</strong> {course || '---'}</p>
                    <p style={styles.previewText}><strong>City:</strong> {city || '---'}</p>
                    <p style={styles.previewText}><strong>Price:</strong> {price || '---'}</p>
                    <p style={styles.previewText}><strong>Status:</strong> {status || '---'}</p>
                </div>
            </div>

            {filteredStudents.length > 0 ? (
                <div>
                    <h3 style={styles.cardsHeading}>
                        {searchQuery ? `Found Profiles (${filteredStudents.length})` : `Registered Profiles (${studentList.length})`}
                    </h3>
                    <div style={styles.gridContainer}>
                        {filteredStudents.map(item => (
                            <StudentCard
                                key={item.id}
                                student={item}
                                onEdit={(updatedStudent) => {
                                    setStudentList(prev => prev.map(item => item.id === updatedStudent.id ? updatedStudent : item));
                                }}
                                onStatusChange={handleStatusUpdate}
                                onDelete={handleDeleteExecution}
                                instituteName={instituteName}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div style={{ textAlign: 'center', marginTop: '40px', color: '#64748b' }}>
                    <p>No students found matching "{searchQuery}"</p>
                </div>
            )}
        </div>
    );
}

export default StudentForm;