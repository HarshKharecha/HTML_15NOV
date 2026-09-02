// Simulates an async promise resource for the experimental use() API
export const fetchDashboardData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        systemStatus: "All Systems Operational",
        serverUptime: "99.98%",
        activeUsers: 42
      });
    }, 1500);
  });
};

// Global promise cache for use() API
export const dashboardResourcePromise = fetchDashboardData();