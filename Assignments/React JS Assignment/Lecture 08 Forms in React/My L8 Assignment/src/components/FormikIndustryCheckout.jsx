import React, { useState } from 'react';
import { useFormik } from 'formik';

function FormikIndustryCheckout() {
  const [summary, setSummary] = useState(null);

  const styles = {
    mainContainer: { 
      padding: '24px', 
      border: '1px solid #e2e8f0', 
      borderRadius: '12px', 
      margin: '20px', 
      backgroundColor: '#f8fafc', 
      fontFamily: 'sans-serif',
      maxWidth: '500px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
    },
    heading: { 
      color: '#0f172a', 
      borderBottom: '2px solid #e2e8f0', 
      paddingBottom: '12px', 
      margin: '0 0 20px 0', 
      fontSize: '1.4rem',
      fontWeight: '700'
    },
    formGroup: {
      marginBottom: '14px',
      display: 'flex',
      flexDirection: 'column'
    },
    input: {
      width: '100%',
      padding: '10px 14px',
      borderRadius: '8px',
      border: '1px solid #cbd5e1',
      fontSize: '0.95rem',
      color: '#334155',
      backgroundColor: '#ffffff',
      boxSizing: 'border-box',
      transition: 'border-color 0.2s ease',
      outline: 'none'
    },
    select: {
      width: '100%',
      padding: '10px 14px',
      borderRadius: '8px',
      border: '1px solid #cbd5e1',
      fontSize: '0.95rem',
      color: '#334155',
      backgroundColor: '#ffffff',
      boxSizing: 'border-box',
      cursor: 'pointer'
    },
    errorText: {
      color: '#ef4444',
      fontSize: '0.8rem',
      margin: '4px 0 0 4px',
      fontWeight: '500'
    },
    button: {
      width: '100%',
      padding: '12px 16px',
      borderRadius: '8px',
      border: 'none',
      fontWeight: '600',
      fontSize: '1rem',
      cursor: 'pointer',
      backgroundColor: '#2563eb', 
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'all 0.2s ease',
      boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)',
      marginTop: '10px'
    },
    summaryBox: {
      marginTop: '24px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
    },
    summaryHeading: {
      margin: '0 0 8px 0',
      color: '#0f172a',
      fontSize: '1.1rem',
      fontWeight: '600'
    },
    summaryText: {
      margin: 0,
      color: '#475569',
      fontSize: '0.95rem'
    }
  };
  
  const formik = useFormik({
    initialValues: { name: '', email: '', mobile: '', address: '', city: '', state: '', pincode: '', payment: 'Cash on Delivery' },
    validate: values => {
      const errors = {};
      if (!values.name) errors.name = 'Required';
      if (!values.email.includes('@')) errors.email = 'Invalid email address';
      if (values.mobile.length !== 10) errors.mobile = 'Must be 10 digits';
      if (!values.address) errors.address = 'Required';
      if (!values.city) errors.city = 'Required';
      if (!values.state) errors.state = 'Required';
      if (values.pincode.length !== 6) errors.pincode = 'Must be 6 digits';
      return errors;
    },
    onSubmit: values => {
      setSummary(values);
    },
  });

  const handleInputFocus = (e) => {
    e.currentTarget.style.borderColor = '#2563eb';
  };

  const handleInputBlur = (e) => {
    e.currentTarget.style.borderColor = '#cbd5e1';
  };

  return (
    <div style={styles.mainContainer}>
      <h2 style={styles.heading}>Task 20: Industrial Checkout Form</h2>
      
      <form onSubmit={formik.handleSubmit}>
        <div style={styles.formGroup}>
          <input 
            name="name" 
            placeholder="Full Name" 
            onChange={formik.handleChange} 
            onFocus={handleInputFocus}
            onBlur={(e) => { handleInputBlur(e); formik.handleBlur(e); }}
            value={formik.values.name} 
            style={styles.input}
          />
          {formik.errors.name && <span style={styles.errorText}>{formik.errors.name}</span>}
        </div>

        <div style={styles.formGroup}>
          <input 
            name="email" 
            placeholder="Email Address" 
            onChange={formik.handleChange} 
            onFocus={handleInputFocus}
            onBlur={(e) => { handleInputBlur(e); formik.handleBlur(e); }}
            value={formik.values.email} 
            style={styles.input}
          />
          {formik.errors.email && <span style={styles.errorText}>{formik.errors.email}</span>}
        </div>

        <div style={styles.formGroup}>
          <input 
            name="mobile" 
            placeholder="Mobile Number" 
            onChange={formik.handleChange} 
            onFocus={handleInputFocus}
            onBlur={(e) => { handleInputBlur(e); formik.handleBlur(e); }}
            value={formik.values.mobile} 
            style={styles.input}
          />
          {formik.errors.mobile && <span style={styles.errorText}>{formik.errors.mobile}</span>}
        </div>

        <div style={styles.formGroup}>
          <input 
            name="address" 
            placeholder="Shipping Address" 
            onChange={formik.handleChange} 
            onFocus={handleInputFocus}
            onBlur={(e) => { handleInputBlur(e); formik.handleBlur(e); }}
            value={formik.values.address} 
            style={styles.input}
          />
          {formik.errors.address && <span style={styles.errorText}>{formik.errors.address}</span>}
        </div>

        <div style={styles.formGroup}>
          <input 
            name="city" 
            placeholder="City" 
            onChange={formik.handleChange} 
            onFocus={handleInputFocus}
            onBlur={(e) => { handleInputBlur(e); formik.handleBlur(e); }}
            value={formik.values.city} 
            style={styles.input}
          />
          {formik.errors.city && <span style={styles.errorText}>{formik.errors.city}</span>}
        </div>

        <div style={styles.formGroup}>
          <input 
            name="state" 
            placeholder="State" 
            onChange={formik.handleChange} 
            onFocus={handleInputFocus}
            onBlur={(e) => { handleInputBlur(e); formik.handleBlur(e); }}
            value={formik.values.state} 
            style={styles.input}
          />
          {formik.errors.state && <span style={styles.errorText}>{formik.errors.state}</span>}
        </div>

        <div style={styles.formGroup}>
          <input 
            name="pincode" 
            placeholder="Pincode" 
            onChange={formik.handleChange} 
            onFocus={handleInputFocus}
            onBlur={(e) => { handleInputBlur(e); formik.handleBlur(e); }}
            value={formik.values.pincode} 
            style={styles.input}
          />
          {formik.errors.pincode && <span style={styles.errorText}>{formik.errors.pincode}</span>}
        </div>

        <div style={styles.formGroup}>
          <select 
            name="payment" 
            onChange={formik.handleChange} 
            value={formik.values.payment}
            style={styles.select}
          >
            <option value="Cash on Delivery">💵 Cash on Delivery (COD)</option>
            <option value="UPI">📱 UPI</option>
            <option value="Credit Card">💳 Credit Card</option>
          </select>
        </div>

        <button 
          type="submit" 
          style={styles.button}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#1d4ed8';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#2563eb';
            e.currentTarget.style.transform = 'none';
          }}
        >
          📦 Place Order
        </button>
      </form>

      {summary && (
        <div style={styles.summaryBox}>
          <h3 style={styles.summaryHeading}>✅ Order Summary</h3>
          <p style={styles.summaryText}>
            Thank you, <strong>{summary.name}</strong>! Your order has been registered via <strong>{summary.payment}</strong>.
          </p>
        </div>
      )}
    </div>
  );
}

export default FormikIndustryCheckout;