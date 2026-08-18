import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import CourseFilter from './components/CourseFilter';
import StudentForm from './components/StudentForm';
import StudentStats from './components/StudentStats';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
import StudentContextComparison from './components/StudentContextComparison';

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    backgroundColor: '#f8fafc',
  },
  mainLayout: { display: 'flex', flex: 1 },
  content: { flex: 1, padding: '1.5rem', maxWidth: '1200px' },
  filterRow: {
    display: 'flex',
    gap: '1rem',
    backgroundColor: '#ffffff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    marginBottom: '1.5rem',
  },
  grid: { display: 'flex', gap: '1.5rem', flexWrap: 'wrap' },
};

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Genius', course: 'ReactJS' },
    { id: 2, name: 'Harshashri', course: 'NodeJS' },
    { id: 3, name: 'Aditya', course: 'Python' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [formData, setFormData] = useState({ name: '', course: '' });

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddStudent = () => {
    const newStudent = {
      id: Date.now(),
      name: formData.name.trim(),
      course: formData.course.trim(),
    };
    setStudents((prev) => [...prev, newStudent]);
    setFormData({ name: '', course: '' });
  };

  const handleSelectStudent = (student) => {
    setSelectedStudentId(student.id);
  };

  const uniqueCourses = Array.from(new Set(students.map((s) => s.course)));

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = selectedCourse === 'All' || student.course === selectedCourse;
    return matchesSearch && matchesCourse;
  });

  const selectedStudent = students.find((s) => s.id === selectedStudentId) || null;

  return (
    <BrowserRouter>
      <div style={styles.appContainer}>
        <Header />
        <div style={styles.mainLayout}>
          <Sidebar />
          <main style={styles.content}>
            <Routes>
              {/* Dashboard View */}
              <Route path="/" element={
                  <>
                    <StudentStats
                      totalStudents={students.length}
                      uniqueCoursesCount={uniqueCourses.length}
                      selectedStudent={selectedStudent}
                    />
                    <StudentForm
                      formData={formData}
                      onFormChange={handleFormChange}
                      onAddStudent={handleAddStudent}
                    />
                    <div style={styles.filterRow}>
                      <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                      <CourseFilter
                        selectedCourse={selectedCourse}
                        onCourseChange={setSelectedCourse}
                        courses={uniqueCourses}
                      />
                    </div>
                    <div style={styles.grid}>
                      <StudentList
                        students={filteredStudents}
                        selectedStudentId={selectedStudentId}
                        onSelectStudent={handleSelectStudent}
                      />
                      <StudentDetails student={selectedStudent} />
                    </div>
                  </>
                }
              />

              {/* Students Management View */}
              <Route path="/students" element={
                  <>
                    <StudentForm
                      formData={formData}
                      onFormChange={handleFormChange}
                      onAddStudent={handleAddStudent}
                    />
                    <div style={styles.filterRow}>
                      <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                      <CourseFilter
                        selectedCourse={selectedCourse}
                        onCourseChange={setSelectedCourse}
                        courses={uniqueCourses}
                      />
                    </div>
                    <div style={styles.grid}>
                      <StudentList
                        students={students}
                        selectedStudentId={selectedStudentId}
                        onSelectStudent={handleSelectStudent}
                      />
                      <StudentDetails student={selectedStudent} />
                    </div>
                  </>
                }
              />

              {/* Courses View */}
              <Route path="/courses" element={
                  <div style={styles.filterRow}>
                    <CourseFilter
                      selectedCourse={selectedCourse}
                      onCourseChange={setSelectedCourse}
                      courses={uniqueCourses}
                    />
                  </div>
                }
              />

              {/* Context Comparison View */}
              <Route path="/context" element={<StudentContextComparison />}
              />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;