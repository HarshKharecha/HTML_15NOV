import React from 'react';
import Header from './Header';
import CourseInfo from './CourseInfo';
import Footer from './Footer';

function CollegeLayout() {
  return (
    <div>
      <Header />
      <section style={{ padding: '20px' }}>
        <h2>About Our College</h2>
        <p>Providing premium technical education for over two decades.</p>
      </section>
      <section style={{ padding: '20px' }}>
        <h2>Available Courses</h2>
        <CourseInfo />
      </section>
      <Footer />
    </div>
  );
}
export default CollegeLayout;