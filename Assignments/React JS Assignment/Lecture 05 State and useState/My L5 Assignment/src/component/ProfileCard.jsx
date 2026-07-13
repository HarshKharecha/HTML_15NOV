import React, { useState } from 'react'

function ProfileCard() {
    const [profile, setProfile] = useState({
        name: 'Genius',
        age: 21,
        profession: 'Software Engineer'
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (field, value) => {
        setProfile({
            ...profile,
            [field]: value
        });
    };

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
            <h3>Task 17: Profile Information Card</h3>
            
            <p>
                <strong>Name:</strong>{' '}
                {isEditing ? (
                    <input type="text" value={profile.name} onChange={(e) => handleInputChange('name', e.target.value)}/>
                ) : (profile.name)
                }
            </p>

            <p>
                <strong>Age:</strong>{' '}
                {isEditing ? (
                    <input type="number" value={profile.age} onChange={(e) => handleInputChange('age', Number(e.target.value))}/>
                ) : (profile.age)
                }
            </p>

            <p>
                <strong>Profession:</strong>{' '}
                {isEditing ? (
                    <input type="text" value={profile.profession} onChange={(e) => handleInputChange('profession', e.target.value)}/>
                ) : (profile.profession)
                }
            </p>
            
            <button onClick={toggleEditMode}>
                {isEditing ? 'Save Profile' : 'Update Profile'}
            </button>
        </div>
    )
}

export default ProfileCard