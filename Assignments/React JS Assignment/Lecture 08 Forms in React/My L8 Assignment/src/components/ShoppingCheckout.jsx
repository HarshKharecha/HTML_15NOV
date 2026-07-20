import React, { useState } from 'react';

function ShoppingCheckout() {
  const [form, setForm] = useState({ name: '', address: '', mobile: '', payment: 'UPI' });
  const [order, setOrder] = useState(null);

  const styles = {
    mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: '700' },
    inputGroup: { marginBottom: '12px' },
    label: { display: 'block', marginBottom: '4px', fontSize: '0.85rem', fontWeight: '600', color: '#475569' },
    input: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box' },
    button: { width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#2563eb', color: '#ffffff' }
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if(!form.name || !form.address || !form.mobile) return alert("Incomplete parameters");
    setOrder(form);
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 15: Shopping Checkout Form</h3>
      <form onSubmit={handleCheckout}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Full Name</label>
          <input type="text" style={styles.input} onChange={e => setForm({...form, name: e.target.value})} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Shipping Destination Address</label>
          <input type="text" style={styles.input} onChange={e => setForm({...form, address: e.target.value})} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Contact Number</label>
          <input type="text" style={styles.input} onChange={e => setForm({...form, mobile: e.target.value})} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Gateway Method</label>
          <select style={{...styles.input, backgroundColor:'#fff'}} onChange={e => setForm({...form, payment: e.target.value})}>
            <option value="UPI">UPI Protocol</option>
            <option value="Cards">Credit / Debit Instrument</option>
          </select>
        </div>
        <button type="submit" style={styles.button}>Finalize Order Checkout</button>
      </form>
      {order && <div style={{marginTop: '16px', background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '14px', borderRadius: '8px'}}><h4 style={{margin:'0 0 4px 0', color:'#166534'}}>🛒 Transaction Manifest Stacked</h4><p style={{margin:0, fontSize: '0.9rem', color: '#14532d'}}>Logistics target set to: {order.name}, {order.address}</p></div>}
    </div>
  );
}

export default ShoppingCheckout;