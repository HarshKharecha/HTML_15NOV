import React, { use } from "react";

function NotificationsPanel({ notificationPromise }) {
  // Read promise directly inside render using experimental React 19 use() API
  const notifications = use(notificationPromise);

  const styles = {
    card: {
      backgroundColor: "#1e293b",
      padding: "1rem",
      borderRadius: "8px",
      marginTop: "1.5rem",
    },
    item: {
      borderBottom: "1px solid #334155",
      padding: "0.5rem 0",
      color: "#cbd5e1",
      display: "flex",
      justifyContent: "space-between",
    },
  };

  return (
    <div style={styles.card}>
      <h3 style={{ color: "#ffffff", marginTop: 0 }}>System Alerts</h3>
      {notifications.map((n) => (
        <div key={n.id} style={styles.item}>
          <span>{n.text}</span>
          <small style={{ color: "#64748b" }}>{n.time}</small>
        </div>
      ))}
    </div>
  );
}

export default NotificationsPanel;