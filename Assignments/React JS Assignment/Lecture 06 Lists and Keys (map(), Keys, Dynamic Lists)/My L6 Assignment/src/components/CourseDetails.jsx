import React from 'react'

function CourseDetails() {
    const styles = {
        container: { display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' },
        card: { backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px', width: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
        title: { fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' },
        subtitle: { fontSize: '1.2rem', fontWeight: '700', color: '#1e293b', display: 'flex', flexDirection: 'column', gap: '12px' }
    };

    const CourseNames = [
        "Generative AI & LLM Engineering",
        "Cloud Architecture with AWS",
        "Advanced Cybersecurity & Ethical Hacking",
        "Full-Stack MERN Development",
        "Data Science & Predictive Analytics"
    ];

    const Coursedetails = [
        "Learn to build intelligent software agents, fine-tune LLMs, and integrate LangChain and vector databases.",
        "Master cloud infrastructure, serverless computing with AWS Lambda, and DevOps CI/CD pipeline automation.",
        "Deep dive into network security, threat intelligence, penetration testing, and AI-driven security operations.",
        "Build highly scalable web applications from scratch using MongoDB, Express, React, and Node.js.",
        "Master Python-driven machine learning models, statistical analysis, and interactive data visualization."
    ];

    const CourseDurations = ["10 Weeks", "6 Weeks", "8 Weeks", "12 Weeks", "10 Weeks"];
    const CourseInstructors = ["Dr. Andrew Ng", "Stephane Maarek", "Prasanth Natarajan", "Angela Yu", "Krish Naik"];

    const CoursePrices = ["₹47,594.62", "₹28,518.62", "₹38,056.62", "₹33,287.62", "₹42,825.62"];

    return (
        <>
            <h2>Course Details:</h2>
            <div style={styles.container}>
                {CourseNames.map((name, index) => {
                    const detail = Coursedetails[index];
                    const duration = CourseDurations[index];
                    const instructor = CourseInstructors[index];
                    const price = CoursePrices[index];

                    return (
                        <div key={index} style={styles.card}>
                            <div style={styles.subtitle}>
                                <div>Course Name: {name}</div>
                                <div>Detail: {detail}</div>
                                <div>Duration: {duration}</div>
                                <div>Instructor: {instructor}</div>
                                <div>Price: {price}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default CourseDetails;