import React, { useState, useEffect } from 'react';
import Login from './components/Auth/Login';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [role, setRole] = useState(localStorage.getItem('role') || null);

  if (!token) {
    return <Login setToken={setToken} setRole={setRole} />;
  }

  return (
    <div>
      <h1>Adaptive Learning Platform</h1>
      <p>Welcome, your role is: {role}</p>
      {/* TODO: Add Dashboard and Quiz components here */}
    </div>
  );
}

export default App;
