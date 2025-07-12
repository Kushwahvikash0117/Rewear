import React, { useState, useEffect } from 'react';
import AdminPanel from './pages/AdminPanel';
import Loading from './pages/loading'; // ✅ Import your loading component
function App() {
  const [loading, setLoading] = useState(true); // Start in loading mode

  useEffect(() => {
    // Simulate a delay (e.g., loading data, initializing)
    const timer = setTimeout(() => {
      setLoading(false); // After 2 seconds, show AdminPanel
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      {loading ? <Loading /> : <AdminPanel />}
    </>
  );
}

export default App;
