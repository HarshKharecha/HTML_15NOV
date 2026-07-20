import React, { useState } from 'react';

function IndustryCheckout() {
  const [values, setValues] = useState({ name: '', email: '', mobile: '', address: '', city: '', state: '', pincode: '', payment: 'Cash on Delivery' });
  const [errors, setErrors] = useState({});
  const [orderSummary, setOrderSummary] = useState(null);

  const styles = {
    mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: '700' },
    gridRow: { display: 'flex', gap: '12px', marginBottom: '12px' },
    inputGroup: { flex: 1, display: 'flex', flexDirection: 'column', minWidth: '0' },
    label: { marginBottom: '4px', fontSize: '0.85rem', fontWeight: '600', color: '#475569' },
    input: { padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box', width: '100%' },
    errText: { color: '#dc2626', fontSize: '0.75rem', marginTop: '3px', fontWeight: '500' },
    button: { width: '100%', padding: '14px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#2563eb', color: '#ffffff', marginTop: '10px' },
    summaryCard: { marginTop: '24px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }
  };

  const validate = () => {
    let tempErrors = {};
    if (!values.name) tempErrors.name = "Name mapping context required";
    if (!values.email.includes('@')) tempErrors.email = "Structural check failure: Needs '@'";
    if (values.mobile.length !== 10) tempErrors.mobile = "Length requirement failure: Needs 10 digits";
    if (!values.address) tempErrors.address = "Logistics target baseline required";
    if (!values.city) tempErrors.city = "City baseline required";
    if (!values.state) tempErrors.state = "State baseline required";
    if (values.pincode.length !== 6) tempErrors.pincode = "Length check restriction: Needs 6 metrics";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setOrderSummary(values);
    else setOrderSummary(null);
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 20: E-Commerce Checkout Form (Industry-Level)</h3>
      <form onSubmit={handleSubmit}>
        <div style={styles.gridRow}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Customer Name</label>
            <input type="text" style={styles.input} onChange={e => setValues({...values, name: e.target.value})} />
            {errors.name && <span style={styles.errText}>{errors.name}</span>}
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" style={styles.input} onChange={e => setValues({...values, email: e.target.value})} />
            {errors.email && <span style={styles.errText}>{errors.email}</span>}
          </div>
        </div>

        <div style={{ ...styles.gridRow, flexDirection: 'column' }}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Mobile Number</label>
            <input type="text" style={styles.input} onChange={e => setValues({...values, mobile: e.target.value})} />
            {errors.mobile && <span style={styles.errText}>{errors.mobile}</span>}
          </div>
        </div>

        <div style={{ ...styles.gridRow, flexDirection: 'column' }}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Logistics Destination Address</label>
            <input type="text" style={styles.input} onChange={e => setValues({...values, address: e.target.value})} />
            {errors.address && <span style={styles.errText}>{errors.address}</span>}
          </div>
        </div>

        <div style={styles.gridRow}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>City</label>
            <input type="text" style={styles.input} onChange={e => setValues({...values, city: e.target.value})} />
            {errors.city && <span style={styles.errText}>{errors.city}</span>}
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>State/Region</label>
            <input type="text" style={styles.input} onChange={e => setValues({...values, state: e.target.value})} />
            {errors.state && <span style={styles.errText}>{errors.state}</span>}
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Pincode</label>
            <input type="text" style={styles.input} onChange={e => setValues({...values, pincode: e.target.value})} />
            {errors.pincode && <span style={styles.errText}>{errors.pincode}</span>}
          </div>
        </div>

        <div style={{ ...styles.gridRow, flexDirection: 'column' }}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Payment Gateway Method</label>
            <select style={{...styles.input, backgroundColor:'#fff'}} onChange={e => setValues({...values, payment: e.target.value})}>
              <option value="Cash on Delivery">💵 Cash on Delivery (COD)</option>
              <option value="UPI">📱 Unified Payments Interface (UPI)</option>
              <option value="Credit Card">💳 Credit Card</option>
            </select>
          </div>
        </div>

        <button 
          type="submit" 
          style={styles.button}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
        >
          📦 Confirm Checkout Purchase
        </button>
      </form>

      {orderSummary && (
        <div style={styles.summaryCard}>
          <h4 style={{ margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px', color: '#1e3a8a' }}>📦 Fulfillment Manifest Dispatched</h4>
          <p style={{ margin: '6px 0', fontSize: '0.9rem' }}><strong>Buyer Identity:</strong> {orderSummary.name} ({orderSummary.email})</p>
          <p style={{ margin: '6px 0', fontSize: '0.9rem' }}><strong>Target Grid Loc:</strong> {orderSummary.address}, {orderSummary.city}, {orderSummary.state} - {orderSummary.pincode}</p>
          <p style={{ margin: '6px 0', fontSize: '0.9rem' }}><strong>Clearing Method:</strong> {orderSummary.payment}</p>
        </div>
      )}
    </div>
  );
}

export default IndustryCheckout;