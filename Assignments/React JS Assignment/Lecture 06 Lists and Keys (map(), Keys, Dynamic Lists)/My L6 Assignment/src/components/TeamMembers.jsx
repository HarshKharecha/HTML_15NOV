import React from 'react'

function TeamMembers() {
    const team = [
        { id: 'emp_01', name: 'Sarah Connor', designation: 'Project Manager', experience: '8 Years' },
        { id: 'emp_02', name: 'John Connor', designation: 'Lead Developer', experience: '5 Years' },
        { id: 'emp_03', name: 'T-800', designation: 'Security Consultant', experience: '12 Years' }
    ];

    return (
        <div>
            <h2>Our Core Team</h2>
            <div style={{ display: 'flex', gap: '20px' }}>
                {team.map(member => (
                    <div key={member.id} style={{ padding: '10px', boxShadow: '0px 2px 5px rgba(0,0,0,0.1)' }}>
                        <h4>{member.name}</h4>
                        <p>{member.designation}</p>
                        <small>Exp: {member.experience}</small>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeamMembers