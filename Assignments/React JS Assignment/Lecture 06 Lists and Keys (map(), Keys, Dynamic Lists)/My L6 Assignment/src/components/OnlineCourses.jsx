import React from 'react'

function OnlineCourses() {
    const styles = {
        container: { display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' },
        card: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', width: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
        title: { fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' },
        subtitle: { fontSize: '1.2rem', fontWeight: '700', color: '#1e293b' }
    };

    const courses = [
        {
            id: "c_generative",
            name: "Generative AI & LLM Engineering",
            details: "Learn to build intelligent software agents, fine-tune LLMs, and integrate LangChain and vector databases.",
            duration: "10 Weeks",
            trainer: "Dr. Andrew Ng",
            price: "₹47,594.62"
        },
        {
            id: "c_cloud",
            name: "Cloud Architecture with AWS",
            details: "Master cloud infrastructure, serverless computing with AWS Lambda, and DevOps CI/CD pipeline automation.",
            duration: "6 Weeks",
            trainer: "Stephane Maarek",
            price: "₹28,518.62"
        },
        {
            id: "c_advanced",
            name: "Advanced Cybersecurity & Ethical Hacking",
            details: "Deep dive into network security, threat intelligence, penetration testing, and AI-driven security operations.",
            duration: "8 Weeks",
            trainer: "Prasanth Natarajan",
            price: "₹38,056.62"
        },
        {
            id: "c_full_stack",
            name: "Full-Stack MERN Development",
            details: "Build highly scalable web applications from scratch using MongoDB, Express, React, and Node.js.",
            duration: "12 Weeks",
            trainer: "Angela Yu",
            price: "₹33,287.62"
        },
        {
            id: "c_data",
            name: "Data Science & Predictive Analytics",
            details: "Master Python-driven machine learning models, statistical analysis, and interactive data visualization.",
            duration: "10 Weeks",
            trainer: "Krish Naik",
            price: "₹42,825.62"
        }
    ];


    return (
        <>
            <h2>Online Dashboard - My Courses</h2>
            <div style={styles.container}>
                {courses.map(course => (
                    <div key={course.id} style={styles.card}>
                        <div style={styles.subtitle}>
                            <h3>{course.name}</h3>
                            <p>Instructor: {course.trainer}</p>
                            <p>Details: {course.details}</p>
                            <p>Duration: {course.duration}</p>
                            <p>Price: {course.price}</p>
                        </div>
                    </div>
                ))}
            </div >
        </>
    )
}

export default OnlineCourses