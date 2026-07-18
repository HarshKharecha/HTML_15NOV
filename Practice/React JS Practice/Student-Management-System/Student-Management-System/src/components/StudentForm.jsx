// import React, { useState } from 'react'

// function StudentForm() {
//     const styles = {
//         container: { display: 'flex', flexDirection: 'row', gap: '8px' },
//         formGroup: { display: 'flex', flexDirection: 'column', gap: '10px' },
//         previewBox: { background: '#f9f9f9', padding: '10px', borderRadius: '4px' }
//     };

//     const [image, setImage] = useState('');
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [course, setCourse] = useState('');
//     const [city, setCity] = useState('');
//     const [status, setStatus] = useState('');

//     const students = [
//     { id: 'S01', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', name: 'Aanya Sharma', email: 'aanya.sharma@email.com', mobile: '9876543210', course: 'B.Tech CSE', city: 'Mumbai', status: 'Active' },
//     { id: 'S02', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', name: 'Rohan Verma', email: 'rohan.v@email.com', mobile: '8765432109', course: 'Data Science', city: 'Delhi', status: 'Active' },
//     { id: 'S03', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', name: 'Priya Patel', email: 'priya.patel@email.com', mobile: '7654321098', course: 'MBA', city: 'Ahmedabad', status: 'Inactive' },
//     { id: 'S04', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', name: 'Arjun Nair', email: 'arjun.nair@email.com', mobile: '6543210987', course: 'UI/UX Design', city: 'Bengaluru', status: 'Active' },
//     { id: 'S05', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80', name: 'Sneha Reddy', email: 'sneha.r@email.com', mobile: '9123456789', course: 'Cyber Security', city: 'Hyderabad', status: 'Pending' }
// ];

//     return (
//         <>
//             <div style={styles.container}>
//                 <div style={styles.formGroup}>
//                     <input type="url" placeholder="Photo Url" value={image} onChange={(e) => setImage(e.target.value)} important />
//                     <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} important />
//                     <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} important />
//                     <input type="tel" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} important />
//                     <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} important />
//                     <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} important />
//                     <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} important />
//                     <button>Submit</button>
//                 </div>

//                 <div style={styles.previewBox}>
//                     <h2>Registration Live Preview:</h2>
//                     <p><strong>Photo:</strong> {image || '---'}</p>
//                     <p><strong>Name:</strong> {name || '---'}</p>
//                     <p><strong>Email:</strong> {email || '---'}</p>
//                     <p><strong>Mobile:</strong> {mobile || '---'}</p>
//                     <p><strong>Course:</strong> {course || '---'}</p>
//                     <p><strong>City:</strong> {city || '---'}</p>
//                     <p><strong>Status:</strong> {status || '---'}</p>
//                 </div>

//                 {/* This Student Car Generate and Show When Registration Was Submited. */}
//                 <div>
//                     <div>
//                         <img src="" alt="" />
//                     </div>
//                     <h2>Name:</h2>
//                     <p><strong>Email:</strong></p>
//                     <p><strong>Mobile:</strong></p>
//                     <p><strong>Course:</strong></p>
//                     <p><strong>City:</strong></p>
//                     <p><strong>Status:</strong></p>
//                     <button>Edit</button>
//                     <button>Delete</button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default StudentForm

// import React, { useState } from 'react';
// import StudentCard from './StudentCard';

// function StudentForm() {
//     const styles = {
//         pageWrapper: { padding: '24px', fontFamily: 'sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh' },
//         topLayout: { display: 'flex', flexDirection: 'row', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '32px' },
//         formGroup: { display: 'flex', flexDirection: 'column', gap: '10px', width: '320px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' },
//         input: { padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' },
//         submitBtn: { backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '0.95rem', marginTop: '5px' },
//         previewBox: { background: '#f9f9f9', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', width: '320px', boxSizing: 'border-box' },
//         previewText: { margin: '8px 0', fontSize: '0.95rem', color: '#334155' },
//         cardsHeading: { color: '#1e293b', margin: '24px 0 16px 0', borderTop: '2px solid #e2e8f0', paddingTop: '20px' },
//         gridContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }
//     };

//     // Form controlled component inputs
//     const [image, setImage] = useState('');
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [course, setCourse] = useState('');
//     const [city, setCity] = useState('');
//     const [status, setStatus] = useState('');

//     // State array initialized with your mock data profiles
//     const [studentList, setStudentList] = useState([
//         { id: 'S01', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', name: 'Aanya Sharma', email: 'aanya.sharma@email.com', mobile: '9876543210', course: 'B.Tech CSE', city: 'Mumbai', status: 'Active' },
//         { id: 'S02', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', name: 'Rohan Verma', email: 'rohan.v@email.com', mobile: '8765432109', course: 'Data Science', city: 'Delhi', status: 'Active' },
//         { id: 'S03', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', name: 'Priya Patel', email: 'priya.patel@email.com', mobile: '7654321098', course: 'MBA', city: 'Ahmedabad', status: 'Inactive' },
//         { id: 'S04', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', name: 'Arjun Nair', email: 'arjun.nair@email.com', mobile: '6543210987', course: 'UI/UX Design', city: 'Bengaluru', status: 'Active' },
//         { id: 'S05', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80', name: 'Sneha Reddy', email: 'sneha.r@email.com', mobile: '9123456789', course: 'Cyber Security', city: 'Hyderabad', status: 'Pending' }
//     ]);

//     // Tracks which specific entry id is being modified 
//     const [editingId, setEditingId] = useState(null);

//     const clearFormFields = () => {
//         setImage(''); setName(''); setEmail(''); setMobile(''); setCourse(''); setCity(''); setStatus('');
//     };

//     const handleSubmit = () => {
//         if (!name.trim() || !email.trim() || !course.trim()) {
//             alert('Name, Email, and Course fields are required.');
//             return;
//         }

//         const standardPayload = { image, name, email, mobile, course, city, status };

//         if (editingId) {
//             // Edit execution block
//             setStudentList(prev => prev.map(item => item.id === editingId ? { ...standardPayload, id: editingId } : item));
//             setEditingId(null);
//         } else {
//             // New entry allocation block
//             const newEntry = { ...standardPayload, id: 'S' + Date.now() };
//             setStudentList(prev => [...prev, newEntry]);
//         }
//         clearFormFields();
//     };

//     const handleEditInitiate = (student) => {
//         setEditingId(student.id);
//         setImage(student.image);
//         setName(student.name);
//         setEmail(student.email);
//         setMobile(student.mobile);
//         setCourse(student.course);
//         setCity(student.city);
//         setStatus(student.status);
//     };

//     const handleDeleteExecution = (id) => {
//         if (window.confirm('Confirm registration deletion?')) {
//             setStudentList(prev => prev.filter(item => item.id !== id));
//             if (editingId === id) {
//                 setEditingId(null);
//                 clearFormFields();
//             }
//         }
//     };

//     return (
//         <div style={styles.pageWrapper}>
//             {/* Form and Preview Side-by-Side Area */}
//             <div style={styles.topLayout}>
//                 <div style={styles.formGroup}>
//                     <h3 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>
//                         {editingId ? '📝 Edit Registration' : '🎓 Student Registration'}
//                     </h3>
//                     <input type="url" placeholder="Photo Url" value={image} onChange={(e) => setImage(e.target.value)} style={styles.input} />
//                     <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />
//                     <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
//                     <input type="tel" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={styles.input} />
//                     <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} style={styles.input} />
//                     <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} style={styles.input} />
//                     <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} style={styles.input} />
//                     <button onClick={handleSubmit} style={styles.submitBtn}>
//                         {editingId ? 'Update Record' : 'Submit'}
//                     </button>
//                 </div>

//                 <div style={styles.previewBox}>
//                     <h2 style={{ margin: '0 0 15px 0', fontSize: '1.25rem', color: '#0f172a' }}>Registration Live Preview:</h2>
//                     <p style={styles.previewText}><strong>Photo:</strong> {image || '---'}</p>
//                     <p style={styles.previewText}><strong>Name:</strong> {name || '---'}</p>
//                     <p style={styles.previewText}><strong>Email:</strong> {email || '---'}</p>
//                     <p style={styles.previewText}><strong>Mobile:</strong> {mobile || '---'}</p>
//                     <p style={styles.previewText}><strong>Course:</strong> {course || '---'}</p>
//                     <p style={styles.previewText}><strong>City:</strong> {city || '---'}</p>
//                     <p style={styles.previewText}><strong>Status:</strong> {status || '---'}</p>
//                 </div>
//             </div>

//             {/* Generated Cards rendered cleanly underneath */}
//             {studentList.length > 0 && (
//                 <div>
//                     <h3 style={styles.cardsHeading}>Registered Profiles ({studentList.length})</h3>
//                     <div style={styles.gridContainer}>
//                         {studentList.map(item => (
//                             <StudentCard
//                                 key={item.id}
//                                 student={item}
//                                 onEdit={handleEditInitiate}
//                                 onDelete={handleDeleteExecution}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default StudentForm;

// import React, { useState } from 'react';
// import StudentCard from './StudentCard';
// import SearchBar from './SearchBar'; 

// function StudentForm() {
//     const styles = {
//         pageWrapper: { padding: '24px', fontFamily: 'sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh' },
//         topLayout: { display: 'flex', flexDirection: 'row', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '32px' },
//         formGroup: { display: 'flex', flexDirection: 'column', gap: '10px', width: '320px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' },
//         input: { padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' },
//         submitBtn: { backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '0.95rem', marginTop: '5px' },
//         previewBox: { background: '#f9f9f9', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', width: '320px', boxSizing: 'border-box' },
//         previewText: { margin: '8px 0', fontSize: '0.95rem', color: '#334155' },
//         cardsHeading: { color: '#1e293b', margin: '24px 0 16px 0', borderTop: '2px solid #e2e8f0', paddingTop: '20px' },
//         gridContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' },
//         noResults: { color: '#64748b', fontSize: '1rem', fontStyle: 'italic', marginTop: '10px' }
//     };

//     // Form Field States
//     const [image, setImage] = useState('');
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [course, setCourse] = useState('');
//     const [city, setCity] = useState('');
//     const [status, setStatus] = useState('');

//     // Student Database State
//     const [studentList, setStudentList] = useState([
//         { id: 'S01', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', name: 'Aanya Sharma', email: 'aanya.sharma@email.com', mobile: '9876543210', course: 'B.Tech CSE', city: 'Mumbai', status: 'Active' },
//         { id: 'S02', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', name: 'Rohan Verma', email: 'rohan.v@email.com', mobile: '8765432109', course: 'Data Science', city: 'Delhi', status: 'Active' },
//         { id: 'S03', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', name: 'Priya Patel', email: 'priya.patel@email.com', mobile: '7654321098', course: 'MBA', city: 'Ahmedabad', status: 'Inactive' },
//         { id: 'S04', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', name: 'Arjun Nair', email: 'arjun.nair@email.com', mobile: '6543210987', course: 'UI/UX Design', city: 'Bengaluru', status: 'Active' },
//         { id: 'S05', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80', name: 'Sneha Reddy', email: 'sneha.r@email.com', mobile: '9123456789', course: 'Cyber Security', city: 'Hyderabad', status: 'Pending' }
//     ]);

//     const [editingId, setEditingId] = useState(null);

//     // Global Centralized Search Strings
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchType, setSearchType] = useState('name');

//     const clearFormFields = () => {
//         setImage(''); setName(''); setEmail(''); setMobile(''); setCourse(''); setCity(''); setStatus('');
//     };

//     const handleSubmit = () => {
//         if (!name.trim() || !email.trim() || !course.trim()) {
//             alert('Name, Email, and Course fields are required.');
//             return;
//         }

//         const studentPayload = { image, name, email, mobile, course, city, status };

//         if (editingId) {
//             setStudentList(prev => prev.map(item => item.id === editingId ? { ...studentPayload, id: editingId } : item));
//             setEditingId(null);
//         } else {
//             const newEntry = { ...studentPayload, id: 'S' + Date.now() };
//             setStudentList(prev => [...prev, newEntry]);
//         }
//         clearFormFields();
//     };

//     const handleEditInitiate = (student) => {
//         setEditingId(student.id);
//         setImage(student.image || '');
//         setName(student.name || '');
//         setEmail(student.email || '');
//         setMobile(student.mobile || '');
//         setCourse(student.course || '');
//         setCity(student.city || '');
//         setStatus(student.status || '');
//     };

//     const handleDeleteExecution = (id) => {
//         if (window.confirm('Confirm registration deletion?')) {
//             setStudentList(prev => prev.filter(item => item.id !== id));
//             if (editingId === id) {
//                 setEditingId(null);
//                 clearFormFields();
//             }
//         }
//     };

//     // Real-Time Filter Calculation Logic
//     const filteredStudents = studentList.filter(student => {
//         if (!searchQuery || searchQuery.trim() === '') return true;
//         const targetValue = student[searchType] ? String(student[searchType]).trim().toLowerCase() : '';
//         return targetValue.includes(searchQuery.trim().toLowerCase());
//     });

//     return (
//         <div style={styles.pageWrapper}>
//             {/* Form and Live Preview */}
//             <div style={styles.topLayout}>
//                 <div style={styles.formGroup}>
//                     <h3 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>
//                         {editingId ? '📝 Edit Registration' : '🎓 Student Registration'}
//                     </h3>
//                     <input type="url" placeholder="Photo Url" value={image} onChange={(e) => setImage(e.target.value)} style={styles.input} />
//                     <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />
//                     <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
//                     <input type="tel" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={styles.input} />
//                     <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} style={styles.input} />
//                     <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} style={styles.input} />
//                     <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} style={styles.input} />
//                     <button onClick={handleSubmit} style={styles.submitBtn}>
//                         {editingId ? 'Update Record' : 'Submit'}
//                     </button>
//                 </div>

//                 <div style={styles.previewBox}>
//                     <h2 style={{ margin: '0 0 15px 0', fontSize: '1.25rem', color: '#0f172a' }}>Registration Live Preview:</h2>
//                     <p style={styles.previewText}><strong>Photo:</strong> {image || '---'}</p>
//                     <p style={styles.previewText}><strong>Name:</strong> {name || '---'}</p>
//                     <p style={styles.previewText}><strong>Email:</strong> {email || '---'}</p>
//                     <p style={styles.previewText}><strong>Mobile:</strong> {mobile || '---'}</p>
//                     <p style={styles.previewText}><strong>Course:</strong> {course || '---'}</p>
//                     <p style={styles.previewText}><strong>City:</strong> {city || '---'}</p>
//                     <p style={styles.previewText}><strong>Status:</strong> {status || '---'}</p>
//                 </div>
//             </div>

//             {/* Profile Grid and the SINGLE Global Search Bar */}
//             <div>
//                 <h3 style={styles.cardsHeading}>Registered Profiles ({studentList.length})</h3>
                
//                 {/* THE SINGLE SEARCH CONTROL */}
//                 <SearchBar 
//                     searchQuery={searchQuery} 
//                     setSearchQuery={setSearchQuery} 
//                     searchType={searchType} 
//                     setSearchType={setSearchType} 
//                 />

//                 {filteredStudents.length > 0 ? (
//                     <div style={styles.gridContainer}>
//                         {filteredStudents.map(item => (
//                             <StudentCard 
//                                 key={item.id} 
//                                 student={item} 
//                                 onEdit={handleEditInitiate} 
//                                 onDelete={handleDeleteExecution} 
//                             />
//                         ))}
//                     </div>
//                 ) : (
//                     <p style={styles.noResults}>No matching student records found for your search query.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default StudentForm;

// import React, { useState } from 'react';
// import StudentCard from './StudentCard';

// // 1. Accept searchQuery as a prop here
// function StudentForm({ searchQuery = '' }) {
//     const styles = {
//         pageWrapper: { padding: '24px', fontFamily: 'sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh' },
//         topLayout: { display: 'flex', flexDirection: 'row', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '32px' },
//         formGroup: { display: 'flex', flexDirection: 'column', gap: '10px', width: '320px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' },
//         input: { padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' },
//         submitBtn: { backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '0.95rem', marginTop: '5px' },
//         previewBox: { background: '#f9f9f9', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', width: '320px', boxSizing: 'border-box' },
//         previewText: { margin: '8px 0', fontSize: '0.95rem', color: '#334155' },
//         cardsHeading: { color: '#1e293b', margin: '24px 0 16px 0', borderTop: '2px solid #e2e8f0', paddingTop: '20px' },
//         gridContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }
//     };

//     const [image, setImage] = useState('');
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [course, setCourse] = useState('');
//     const [city, setCity] = useState('');
//     const [status, setStatus] = useState('');

//     const [studentList, setStudentList] = useState([
//         { id: 'S01', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', name: 'Aanya Sharma', email: 'aanya.sharma@email.com', mobile: '9876543210', course: 'B.Tech CSE', city: 'Mumbai', status: 'Active' },
//         { id: 'S02', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', name: 'Rohan Verma', email: 'rohan.v@email.com', mobile: '8765432109', course: 'Data Science', city: 'Delhi', status: 'Active' },
//         { id: 'S03', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', name: 'Priya Patel', email: 'priya.patel@email.com', mobile: '7654321098', course: 'MBA', city: 'Ahmedabad', status: 'Inactive' },
//         { id: 'S04', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', name: 'Arjun Nair', email: 'arjun.nair@email.com', mobile: '6543210987', course: 'UI/UX Design', city: 'Bengaluru', status: 'Active' },
//         { id: 'S05', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80', name: 'Sneha Reddy', email: 'sneha.r@email.com', mobile: '9123456789', course: 'Cyber Security', city: 'Hyderabad', status: 'Pending' }
//     ]);

//     const [editingId, setEditingId] = useState(null);

//     const clearFormFields = () => {
//         setImage(''); setName(''); setEmail(''); setMobile(''); setCourse(''); setCity(''); setStatus('');
//     };

//     const handleSubmit = () => {
//         if (!name.trim() || !email.trim() || !course.trim()) {
//             alert('Name, Email, and Course fields are required.');
//             return;
//         }

//         const standardPayload = { image, name, email, mobile, course, city, status };

//         if (editingId) {
//             setStudentList(prev => prev.map(item => item.id === editingId ? { ...standardPayload, id: editingId } : item));
//             setEditingId(null);
//         } else {
//             const newEntry = { ...standardPayload, id: 'S' + Date.now() };
//             setStudentList(prev => [...prev, newEntry]);
//         }
//         clearFormFields();
//     };

//     const handleEditInitiate = (student) => {
//         setEditingId(student.id);
//         setImage(student.image || '');
//         setName(student.name);
//         setEmail(student.email);
//         setMobile(student.mobile || '');
//         setCourse(student.course);
//         setCity(student.city || '');
//         setStatus(student.status || '');
//     };

//     const handleDeleteExecution = (id) => {
//         if (window.confirm('Confirm registration deletion?')) {
//             setStudentList(prev => prev.filter(item => item.id !== id));
//             if (editingId === id) {
//                 setEditingId(null);
//                 clearFormFields();
//             }
//         }
//     };

//     // Computation layer for search filtering
//     const filteredStudents = studentList.filter(student => {
//         const term = searchQuery.toLowerCase();
//         return (
//             (student.name || '').toLowerCase().includes(term) ||
//             (student.email || '').toLowerCase().includes(term) ||
//             (student.course || '').toLowerCase().includes(term) ||
//             (student.city || '').toLowerCase().includes(term)
//         );
//     });

//     return (
//         <div style={styles.pageWrapper}>
//             <div style={styles.topLayout}>
//                 {/* Form Group */}
//                 <div style={styles.formGroup}>
//                     <h3 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>
//                         {editingId ? '📝 Edit Registration' : '🎓 Student Registration'}
//                     </h3>
//                     <input type="url" placeholder="Photo Url" value={image} onChange={(e) => setImage(e.target.value)} style={styles.input} />
//                     <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />
//                     <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
//                     <input type="tel" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={styles.input} />
//                     <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} style={styles.input} />
//                     <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} style={styles.input} />
//                     <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} style={styles.input} />
//                     <button onClick={handleSubmit} style={styles.submitBtn}>
//                         {editingId ? 'Update Record' : 'Submit'}
//                     </button>
//                 </div>

//                 {/* Preview Box */}
//                 <div style={styles.previewBox}>
//                     <h2 style={{ margin: '0 0 15px 0', fontSize: '1.25rem', color: '#0f172a' }}>Registration Live Preview:</h2>
//                     <p style={styles.previewText}><strong>Photo:</strong> {image || '---'}</p>
//                     <p style={styles.previewText}><strong>Name:</strong> {name || '---'}</p>
//                     <p style={styles.previewText}><strong>Email:</strong> {email || '---'}</p>
//                     <p style={styles.previewText}><strong>Mobile:</strong> {mobile || '---'}</p>
//                     <p style={styles.previewText}><strong>Course:</strong> {course || '---'}</p>
//                     <p style={styles.previewText}><strong>City:</strong> {city || '---'}</p>
//                     <p style={styles.previewText}><strong>Status:</strong> {status || '---'}</p>
//                 </div>
//             </div>

//             {/* Cleaned up Cards display to render conditionally based on filter results */}
//             {filteredStudents.length > 0 ? (
//                 <div>
//                     <h3 style={styles.cardsHeading}>
//                         {searchQuery ? `Found Profiles (${filteredStudents.length})` : `Registered Profiles (${studentList.length})`}
//                     </h3>
//                     <div style={styles.gridContainer}>
//                         {filteredStudents.map(item => (
//                             <StudentCard
//                                 key={item.id}
//                                 student={item}
//                                 onEdit={handleEditInitiate}
//                                 onDelete={handleDeleteExecution}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             ) : (
//                 <div style={{ textAlign: 'center', marginTop: '40px', color: '#64748b' }}>
//                     <p>No students found matching "{searchQuery}"</p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default StudentForm;

import React, { useState } from 'react';
import StudentCard from './StudentCard';

function StudentForm({ searchQuery = '', instituteName }) {
    const styles = {
        pageWrapper: { padding: '24px', fontFamily: 'sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh' },
        topLayout: { display: 'flex', flexDirection: 'row', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '32px' },
        formGroup: { display: 'flex', flexDirection: 'column', gap: '10px', width: '320px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' },
        input: { padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' },
        select: { padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', backgroundColor: '#ffffff', outline: 'none', cursor: 'pointer' },
        submitBtn: { backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '0.95rem', marginTop: '5px' },
        previewBox: { background: '#f9f9f9', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', width: '320px', boxSizing: 'border-box' },
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
    // Default to 'Active' automatically
    const [status, setStatus] = useState('Active'); 

    const [studentList, setStudentList] = useState([
        { id: 'S01', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', name: 'Aanya Sharma', email: 'aanya.sharma@email.com', mobile: '9876543210', course: 'B.Tech CSE', city: 'Mumbai', status: 'Active' },
        { id: 'S02', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', name: 'Rohan Verma', email: 'rohan.v@email.com', mobile: '8765432109', course: 'Data Science', city: 'Delhi', status: 'Active' },
        { id: 'S03', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', name: 'Priya Patel', email: 'priya.patel@email.com', mobile: '7654321098', course: 'MBA', city: 'Ahmedabad', status: 'Completed' },
        { id: 'S04', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', name: 'Arjun Nair', email: 'arjun.nair@email.com', mobile: '6543210987', course: 'UI/UX Design', city: 'Bengaluru', status: 'Active' },
        { id: 'S05', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80', name: 'Sneha Reddy', email: 'sneha.r@email.com', mobile: '9123456789', course: 'Cyber Security', city: 'Hyderabad', status: 'Completed' }
    ]);

    const [editingId, setEditingId] = useState(null);

    const clearFormFields = () => {
        setImage(''); setName(''); setEmail(''); setMobile(''); setCourse(''); setCity(''); setStatus('Active');
    };

    const handleSubmit = () => {
        if (!name.trim() || !email.trim() || !course.trim()) {
            alert('Name, Email, and Course fields are required.');
            return;
        }

        const standardPayload = { image, name, email, mobile, course, city, status };

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
        setStatus(student.status || 'Active');
    };

    // Callback used when changing status directly inside the card display view
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
            (student.status || '').toLowerCase().includes(term)
        );
    });

    return (
        <div style={styles.pageWrapper}>
            <div style={styles.topLayout}>
                <div style={styles.formGroup}>
                    <h3 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>
                        {editingId ? '📝 Edit Registration' : '🎓 Student Registration'}
                    </h3>
                    <input type="url" placeholder="Photo Url" value={image} onChange={(e) => setImage(e.target.value)} style={styles.input} />
                    <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
                    <input type="tel" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={styles.input} />
                    <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} style={styles.input} />
                    <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} style={styles.input} />
                    
                    {/* AUTOMATED DROPDOWN REPLACE */}
                    <select value={status} onChange={(e) => setStatus(e.target.value)} style={styles.select}>
                        <option value="Active">🟢 Active</option>
                        <option value="Completed">🔵 Completed</option>
                    </select>

                    <button onClick={handleSubmit} style={styles.submitBtn}>
                        {editingId ? 'Update Record' : 'Submit'}
                    </button>
                </div>

                <div style={styles.previewBox}>
                    <h2 style={{ margin: '0 0 15px 0', fontSize: '1.25rem', color: '#0f172a' }}>Registration Live Preview:</h2>
                    <p style={styles.previewText}><strong>Institute:</strong> {instituteName}</p>
                    <p style={styles.previewText}><strong>Photo:</strong> {image || '---'}</p>
                    <p style={styles.previewText}><strong>Name:</strong> {name || '---'}</p>
                    <p style={styles.previewText}><strong>Email:</strong> {email || '---'}</p>
                    <p style={styles.previewText}><strong>Mobile:</strong> {mobile || '---'}</p>
                    <p style={styles.previewText}><strong>Course:</strong> {course || '---'}</p>
                    <p style={styles.previewText}><strong>City:</strong> {city || '---'}</p>
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
                                onEdit={handleEditInitiate}
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