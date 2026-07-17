import React, { useState } from 'react';

function FeedbackForm() {
    const [feedback, setFeedback] = useState('');
    const [submittedFeedbacks, setSubmittedFeedbacks] = useState([]);

    const styles = {
        mainContainer: { 
            padding: '24px', 
            border: '1px solid #e2e8f0', 
            borderRadius: '12px', 
            margin: '20px', 
            backgroundColor: '#f8fafc', 
            fontFamily: 'sans-serif',
            maxWidth: '500px', // Optinal for Choise
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        heading: { 
            color: '#0f172a', 
            borderBottom: '2px solid #e2e8f0', 
            paddingBottom: '12px', 
            margin: '0 0 20px 0', 
            fontSize: '1.5rem' 
        },
        textarea: { 
            width: '100%', 
            padding: '12px', 
            borderRadius: '8px', 
            border: '1px solid #cbd5e1', 
            boxSizing: 'border-box', 
            resize: 'vertical',
            fontSize: '0.95rem',
            color: '#1e293b',
            fontFamily: 'inherit',
            outline: 'none',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
        },
        submitBtn: { 
            marginTop: '12px', 
            backgroundColor: '#2563eb', 
            color: '#ffffff', 
            border: 'none', 
            borderRadius: '8px', 
            padding: '12px 16px', 
            fontWeight: '600', 
            fontSize: '0.95rem',
            cursor: 'pointer', 
            width: '100%',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
        },
        previewBox: { 
            marginTop: '20px', 
            backgroundColor: '#ffffff', 
            padding: '14px', 
            borderLeft: '4px solid #3b82f6', 
            borderRadius: '0 8px 8px 0',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
        },
        previewHeading: { 
            margin: '0 0 6px 0', 
            color: '#475569', 
            fontSize: '0.8rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
        },
        previewText: (hasContent) => ({
            whiteSpace: 'pre-wrap', 
            margin: 0, 
            color: hasContent ? '#0f172a' : '#94a3b8',
            fontSize: '0.9rem',
            fontStyle: hasContent ? 'normal' : 'italic'
        }),
        cardContainer: { 
            marginTop: '24px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px',
            borderTop: '1px dashed #cbd5e1',
            paddingTop: '20px'
        },
        sectionTitle: {
            margin: '0 0 4px 0', 
            color: '#0f172a',
            fontSize: '1.1rem',
            fontWeight: '700'
        },
        feedbackCard: { 
            backgroundColor: '#ffffff', 
            border: '1px solid #e2e8f0', 
            borderRadius: '8px', 
            padding: '14px', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)' 
        },
        cardHeader: { 
            margin: '0 0 6px 0', 
            fontSize: '0.8rem', 
            color: '#64748b', 
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
        }
    };

    const handleSubmit = () => {
        if (!feedback.trim()) return;

        const newEntry = {
            id: Date.now(),
            text: feedback,
            date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        };

        setSubmittedFeedbacks([newEntry, ...submittedFeedbacks]);
        setFeedback('');
    };

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 16: Feedback Form</h3>
            
            <textarea 
                rows="4" 
                placeholder="Type your feedback here..." 
                value={feedback} 
                onChange={(e) => setFeedback(e.target.value)}
                style={styles.textarea}
                onFocus={(e) => {
                    e.target.style.borderColor = '#2563eb';
                    e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.15)';
                }}
                onBlur={(e) => {
                    e.target.style.borderColor = '#cbd5e1';
                    e.target.style.boxShadow = 'none';
                }}
            />
            
            <button 
                style={styles.submitBtn} 
                onClick={handleSubmit}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#1d4ed8';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#2563eb';
                    e.currentTarget.style.transform = 'none';
                }}
            >
                Submit Feedback
            </button>

            {/* Live Feedback Preview */}
            <div style={styles.previewBox}>
                <h5 style={styles.previewHeading}>Live Preview</h5>
                <p style={styles.previewText(!!feedback)}>
                    {feedback || 'Waiting for feedback input...'}
                </p>
            </div>

            {/* Rendered Feedback Cards */}
            {submittedFeedbacks.length > 0 && (
                <div style={styles.cardContainer}>
                    <h4 style={styles.sectionTitle}>Submitted Reviews ({submittedFeedbacks.length})</h4>
                    {submittedFeedbacks.map((item) => (
                        <div key={item.id} style={styles.feedbackCard}>
                            <p style={styles.cardHeader}>
                                <span>🕒</span> Posted at {item.date}
                            </p>
                            <p style={{ whiteSpace: 'pre-wrap', margin: 0, color: '#334155', fontSize: '0.95rem', lineHeight: '1.4' }}>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FeedbackForm;