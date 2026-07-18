import React, { useState, useEffect } from 'react';

function StudentCard({ student = {}, onEdit, onDelete, instituteName, onFormEditInitiate }) {
  const [isInlineEditing, setIsInlineEditing] = useState(false);
  const [localData, setLocalData] = useState({ ...student });

  useEffect(() => {
    setLocalData({ ...student });
  }, [student]);

  const isCompleted = localData.status === 'Completed';

  const styles = {
    card: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '16px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)',
      borderTop: `5px solid ${isCompleted ? '#10b981' : '#2563eb'}`
    },
    imgContainer: { width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto', border: '2px solid #cbd5e1' },
    avatar: { width: '100%', height: '100%', objectFit: 'cover' },
    studentName: { fontSize: '1.2rem', fontWeight: '700', color: '#0f172a', textAlign: 'center', margin: '0 0 4px 0' },
    instituteBadge: { fontSize: '0.8rem', fontWeight: 'bold', color: '#2563eb', backgroundColor: '#eff6ff', width: '120px', padding: '4px 8px', borderRadius: '51px', textAlign: 'center', margin: '0 auto 4px auto' },
    statusBadge: {
      fontSize: '0.8rem',
      fontWeight: 'bold',
      display: 'inline-block',
      textAlign: 'center',
      padding: '4px 10px',
      borderRadius: '20px',
      margin: '0 auto 8px auto',
      backgroundColor: isCompleted ? '#dcfce7' : '#dbeafe',
      color: isCompleted ? '#15803d' : '#1e40af'
    },
    infoText: { fontSize: '0.9rem', color: '#475569', margin: '4px 0', display: 'flex', gap: '4px', alignItems: 'center' },
    cardInput: { width: '100%', padding: '6px 8px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem', boxSizing: 'border-box', backgroundColor: '#ffffff' },
    btnGroup: { display: 'flex', gap: '10px', marginTop: '12px' },
    editBtn: { flex: 1, backgroundColor: '#f1f5f9', color: '#334155', border: '1px solid #cbd5e1', padding: '8px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem' },
    saveBtn: { flex: 1, backgroundColor: '#22c55e', color: '#ffffff', border: 'none', padding: '8px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem' },
    deleteBtn: { flex: 1, backgroundColor: '#fee2e2', color: '#dc2626', border: '1px solid #fecaca', padding: '8px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem' },
    cancelBtn: { flex: 1, backgroundColor: '#f1f5f9', color: '#64748b', border: '1px solid #cbd5e1', padding: '8px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem' }
  };

  if (!student || !student.id) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!localData.name.trim() || !localData.email.trim() || !localData.course.trim() || !localData.city.trim() || !localData.price.toString().trim()) {
      return;
    }

    let cleanPrice = localData.price.toString().trim();
    if (!cleanPrice.startsWith('₹')) {
      cleanPrice = '₹' + cleanPrice;
    }

    onEdit({ ...localData, price: cleanPrice });
    setIsInlineEditing(false);
  };

  const handleCancel = () => {
    setLocalData({ ...student });
    setIsInlineEditing(false);
  };

  return (
    <div style={styles.card}>
      <div style={styles.imgContainer}>
        {localData.image ? (
          <img src={localData.image} alt={localData.name} style={styles.avatar} />
        ) : (
          <span style={{ fontSize: '2rem' }}>👤</span>
        )}
      </div>

      <div style={styles.instituteBadge}>🏢 {instituteName || '---'}</div>
      <div style={styles.statusBadge}>{isCompleted ? '🔵 Completed' : '🟢 Active'}</div>

      {isInlineEditing ? (
        <div>
          <div style={{ marginBottom: '8px' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#64748b' }}>Photo URL:</label>
            <input type="text" name="image" value={localData.image} onChange={handleInputChange} style={styles.cardInput} />
          </div>
          <div style={{ marginBottom: '8px' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#64748b' }}>Name:</label>
            <input type="text" name="name" value={localData.name} onChange={handleInputChange} style={styles.cardInput} />
          </div>
          <div style={{ marginBottom: '8px' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#64748b' }}>Email:</label>
            <input type="email" name="email" value={localData.email} onChange={handleInputChange} style={styles.cardInput} />
          </div>
          <div style={{ marginBottom: '8px' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#64748b' }}>Mobile:</label>
            <input type="tel" name="mobile" value={localData.mobile} onChange={handleInputChange} style={styles.cardInput} />
          </div>
          <div style={{ marginBottom: '8px' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#64748b' }}>Course:</label>
            <input type="text" name="course" value={localData.course} onChange={handleInputChange} style={styles.cardInput} />
          </div>
          <div style={{ marginBottom: '8px' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#64748b' }}>City:</label>
            <input type="text" name="city" value={localData.city} onChange={handleInputChange} style={styles.cardInput} />
          </div>
          <div style={{ marginBottom: '8px' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#64748b' }}>Price:</label>
            <input type="text" name="price" value={localData.price} onChange={handleInputChange} style={styles.cardInput} />
          </div>
          <div style={{ marginBottom: '8px' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#64748b' }}>Status:</label>
            <select name="status" value={localData.status} onChange={handleInputChange} style={styles.cardInput}>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div style={styles.btnGroup}>
            <button style={styles.saveBtn} onClick={handleSave}>💾 Save</button>
            <button style={styles.cancelBtn} onClick={handleCancel}>❌ Cancel</button>
          </div>
        </div>
      ) : (
        <div>
          <h4 style={styles.studentName}>{student.name}</h4>
          <p style={styles.infoText}><strong>Email:</strong> {student.email}</p>
          <p style={styles.infoText}><strong>Mobile:</strong> {student.mobile || '---'}</p>
          <p style={styles.infoText}><strong>Course:</strong> {student.course}</p>
          <p style={styles.infoText}><strong>City:</strong> {student.city}</p>
          <p style={styles.infoText}><strong>Price:</strong> {student.price}</p>

          <div style={styles.btnGroup}>
            <button style={styles.editBtn} onClick={() => setIsInlineEditing(true)}>✏️ Edit</button>
            <button style={styles.deleteBtn} onClick={() => onDelete(student.id)}>🗑️ Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentCard;