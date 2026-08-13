import React, { useRef, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomInput from './components/CustomInput';
import LoginForm from './components/LoginForm';
import Modal from './components/Modal';
import AlertDialog from './components/AlertDialog';
import VideoPlayer from './components/VideoPlayer';
import SearchInput from './components/SearchInput';
import Prectic from './components/Prectic';

function App() {
  // Parent Refs for direct imperative method calls
  const customInputRef = useRef(null);
  const loginFormRef = useRef(null);
  const modalRef = useRef(null);
  const alertRef = useRef(null);
  const videoRef = useRef(null);
  const searchRef = useRef(null);

  const [outputValue, setOutputValue] = useState('');

  // Custom Input Handlers
  const handleFocusCustomInput = () => customInputRef.current?.focusInput();
  const handleClearCustomInput = () => customInputRef.current?.clearInput();
  const handleGetCustomInputValue = () => {
    const val = customInputRef.current?.getValue();
    setOutputValue(val || 'Empty');
  };

  // Login Form Handlers
  const handleResetForm = () => loginFormRef.current?.resetForm();
  const handleFocusUsername = () => loginFormRef.current?.focusUsername();

  // Modal Handlers
  const handleOpenModal = () => modalRef.current?.openModal();
  const handleCloseModal = () => modalRef.current?.closeModal();

  // Alert Handlers
  const handleShowAlert = () =>
    alertRef.current?.showAlert('System Warning', 'Unauthorized action blocked.');

  // Video Handlers
  const handlePlayVideo = () => videoRef.current?.playVideo();
  const handlePauseVideo = () => videoRef.current?.pauseVideo();
  const handleStopVideo = () => videoRef.current?.stopVideo();

  // Search Handlers
  const handleFocusSearch = () => searchRef.current?.focusSearch();
  const handleClearSearch = () => searchRef.current?.clearSearch();

  return (
    <div style={styles.appWrapper}>
      <Header />

      <main>
        <h2>Imperative Control Dashboard</h2>

        <div>

          <Prectic />
          
          {/* Section 1: Single Input Methods */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>1. Single Input Ref</h3>
            <CustomInput ref={customInputRef} placeholder="Type custom value..." />
            <div style={styles.btnRow}>
              <button style={styles.btnPrimary} onClick={handleFocusCustomInput}>Focus</button>
              <button style={styles.btnSecondary} onClick={handleClearCustomInput}>Clear</button>
              <button style={styles.btnInfo} onClick={handleGetCustomInputValue}>Get Value</button>
            </div>
            {outputValue && <p style={styles.outText}>Exposed Value: <b>{outputValue}</b></p>}
          </div>

          {/* Section 2: Login Form Control */}
          <div style={styles.card}>
            <LoginForm ref={loginFormRef} />
            <div style={{ ...styles.btnRow, marginTop: '1rem' }}>
              <button style={styles.btnPrimary} onClick={handleFocusUsername}>Focus User</button>
              <button style={styles.btnDanger} onClick={handleResetForm}>Reset Form</button>
            </div>
          </div>

          {/* Section 3: Modal & Alert Control */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>3. Modals & Dialogs</h3>
            <div style={styles.btnStack}>
              <button style={styles.btnPrimary} onClick={handleOpenModal}>Open Modal</button>
              <button style={styles.btnDanger} onClick={handleShowAlert}>Show Alert Dialog</button>
            </div>
          </div>

          {/* Section 4: Video Player */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>4. Video Controls</h3>
            <VideoPlayer
              ref={videoRef}
              src="https://www.youtube.com/embed/KYUURuT4W5Y?si=Qqrga0aLw47aTsxL"
            />
            <div style={{ ...styles.btnRow, marginTop: '0.75rem' }}>
              <button style={styles.btnSuccess} onClick={handlePlayVideo}>Play</button>
              <button style={styles.btnWarning} onClick={handlePauseVideo}>Pause</button>
              <button style={styles.btnDanger} onClick={handleStopVideo}>Stop</button>
            </div>
          </div>

          {/* Section 5: Search Bar */}
          <div style={{ ...styles.card, gridColumn: '1 / -1' }}>
            <h3 style={styles.cardTitle}>5. Search Bar Controls</h3>
            <SearchInput ref={searchRef} />
            <div style={{ ...styles.btnRow, marginTop: '0.75rem' }}>
              <button style={styles.btnPrimary} onClick={handleFocusSearch}>Focus Search</button>
              <button style={styles.btnSecondary} onClick={handleClearSearch}>Clear Search</button>
            </div>
          </div>
        </div>
      </main>

      {/* Global Modals Controlled Imperatively */}
      <Modal ref={modalRef} title="Imperative Modal">
        <p>This modal is opened via <code>ref.current.openModal()</code>.</p>
        <button style={styles.btnDanger} onClick={handleCloseModal}>
          Close via Parent Ref
        </button>
      </Modal>

      <AlertDialog ref={alertRef} />

      <Footer />
    </div>
  );
}

const styles = {
  appWrapper: {
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  },
  sectionHeader: {
    margin: '0 0 1.5rem',
    fontSize: '1.5rem',
    color: '#0f172a',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: '#ffffff',
    width: '400px',
    margin: '9px',
    borderRadius: '10px',
    padding: '1.25rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e2e8f0',
  },
  cardTitle: {
    margin: '0 0 1rem',
    fontSize: '1.1rem',
    color: '#1e293b',
  },
  btnRow: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  btnStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  btnPrimary: {
    padding: '0.45rem 0.8rem',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
  },
  btnSecondary: {
    padding: '0.45rem 0.8rem',
    backgroundColor: '#ef4444',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  btnSuccess: {
    padding: '0.45rem 0.8rem',
    backgroundColor: '#16a34a',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  btnWarning: {
    padding: '0.45rem 0.8rem',
    backgroundColor: '#d97706',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  btnDanger: {
    padding: '0.45rem 0.8rem',
    backgroundColor: '#dc2626',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  btnInfo: {
    padding: '0.45rem 0.8rem',
    backgroundColor: '#0284c7',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  outText: {
    marginTop: '0.75rem',
    fontSize: '0.875rem',
    color: '#334155',
  },
};

export default App;