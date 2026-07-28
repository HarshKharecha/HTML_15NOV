import React from 'react';
import { Outlet } from 'react-router-dom';
import { EnterpriseHeader, EnterpriseSidebar, EnterpriseFooter } from './EnterpriseSubComponents';

function EnterpriseLayout() {
  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '650px',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid #cbd5e1',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    bodyContainer: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#f8fafc'
    },
    contentArea: {
      flex: 1,
      padding: '24px',
      backgroundColor: '#ffffff',
      overflowY: 'auto'
    }
  };

  return (
    <div style={styles.wrapper}>
      <EnterpriseHeader />
      <div style={styles.bodyContainer}>
        <EnterpriseSidebar />
        <main style={styles.contentArea}>
          <Outlet />
        </main>
      </div>
      <EnterpriseFooter />
    </div>
  );
}

export default EnterpriseLayout;