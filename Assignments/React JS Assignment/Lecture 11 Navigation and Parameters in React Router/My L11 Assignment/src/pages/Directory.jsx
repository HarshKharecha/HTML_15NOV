import React from 'react'
import { useNavigate } from 'react-router-dom';

function Directory() {
    const navigate = useNavigate();
    const styles = {
        pageContainer: {
            fontFamily: 'system-ui, sans-serif',
            margin: '20px',
            padding: '24px',
            backgroundColor: '#f8fafc',
            borderRadius: '16px',
            border: '1px solid #e2e8f0'
        },
        heading: {
            color: '#0f172a',
            marginBottom: '20px',
            fontSize: '1.5rem'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px'
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.02)',
            transition: 'all 0.2s'
        },
        image: {
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1px solid #cbd5e1',
        },
        info: {
            margin: '9px auto',
        },
        name: {
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#1e293b',
            margin: 0
        },
        text: {
            fontSize: '0.9rem',
            color: '#64748b',
            margin: 0
        },
        button: {
            width: '100%',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            margin: '9px auto',
            padding: '10px 16px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            transition: 'background-color 0.2s'
        }
    };

    const employees = [
        { id: 'E01', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', name: 'Aanya Sharma', email: 'aanya.sharma@email.com', mobile: '9876543210', role: 'B.Tech CSE', city: 'Mumbai', price: '₹1,50,000', status: 'Active' },
        { id: 'E02', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', name: 'Rohan Verma', email: 'rohan.v@email.com', mobile: '8765432109', role: 'Data Science', city: 'Delhi', price: '₹95,000', status: 'Active' },
        { id: 'E03', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', name: 'Priya Patel', email: 'priya.patel@email.com', mobile: '7654321098', role: 'MBA', city: 'Ahmedabad', price: '₹2,10,000', status: 'Completed' },
        { id: 'E04', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', name: 'Arjun Nair', email: 'arjun.nair@email.com', mobile: '6543210987', role: 'UI/UX Design', city: 'Bengaluru', price: '₹75,000', status: 'Active' },
        { id: 'E05', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80', name: 'Sneha Reddy', email: 'sneha.r@email.com', mobile: '9123456789', role: 'Cyber Security', city: 'Hyderabad', price: '₹1,20,000', status: 'Completed' }
    ];

    return (
        <div style={styles.pageContainer}>
            <h2 style={styles.heading}>Employee Directory</h2>
            <div style={styles.grid}>
                {employees.map((emp) => (
                    <div key={emp.id} style={styles.card}>
                        <div style={styles.leftSection}>
                            <img src={emp.image} alt={emp.name} style={styles.image} />
                            <div style={styles.info}>
                                <h4 style={styles.name}>{emp.name}</h4>
                                <p style={styles.text}><strong>Role:</strong> {emp.role}</p>
                                <p style={styles.text}><strong>City:</strong> {emp.city}</p>
                            </div>
                        </div>
                        <button
                            style={styles.button}
                            onClick={() => navigate(`/demployee/${emp.id}`)}
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Directory