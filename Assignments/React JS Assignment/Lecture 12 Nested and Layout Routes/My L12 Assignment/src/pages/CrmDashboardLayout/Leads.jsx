import React from 'react';

function Leads() {
    const styles = {
        pageContainer: {
            fontFamily: 'system-ui, sans-serif',
            padding: '24px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        },
        heading: {
            color: '#0f172a',
            marginBottom: '20px',
            fontSize: '1.5rem',
            fontWeight: '700'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px'
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        },
        title: {
            fontSize: '1rem',
            fontWeight: '600',
            color: '#0f172a',
            margin: '0 0 6px 0'
        },
        text: {
            fontSize: '0.875rem',
            color: '#64748b',
            margin: '4px 0'
        },
        stageBadge: (stage) => ({
            display: 'inline-block',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: '600',
            color: stage === 'Negotiation' ? '#854d0e' : stage === 'Qualified' ? '#1e40af' : '#166534',
            backgroundColor: stage === 'Negotiation' ? '#fef9c3' : stage === 'Qualified' ? '#dbeafe' : '#dcfce7',
            marginTop: '6px'
        }),
        button: {
            width: '100%',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 16px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '14px'
        }
    };

    const leadsList = [
        { id: 'LD-201', name: 'Tech Mahindra', dealValue: '₹42,00,000', source: 'Web Inbound', stage: 'Negotiation' },
        { id: 'LD-202', name: 'Wipro Limited', dealValue: '₹95,00,000', source: 'Referral', stage: 'Qualified' },
        { id: 'LD-203', name: 'HCL Technologies', dealValue: '₹30,00,000', source: 'Cold Outreach', stage: 'Proposal Sent' }
    ];

    return (
        <div style={styles.pageContainer}>
            <h2 style={styles.heading}>Lead Pipeline</h2>
            <div style={styles.grid}>
                {leadsList.map((lead) => (
                    <div key={lead.id} style={styles.card}>
                        <div>
                            <h4 style={styles.title}>{lead.name}</h4>
                            <p style={styles.text}><strong>Estimated Value:</strong> {lead.dealValue}</p>
                            <p style={styles.text}><strong>Source:</strong> {lead.source}</p>
                            <span style={styles.stageBadge(lead.stage)}>{lead.stage}</span>
                        </div>
                        <button
                            style={styles.button}
                            onClick={() => alert(`Advancing deal stage for ${lead.name}`)}
                        >
                            Update Deal
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Leads;