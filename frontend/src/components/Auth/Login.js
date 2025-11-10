import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ setToken, setRole }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setToken(res.data.token);
      setRole(res.data.role);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={submit}>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
      <button type="submit">Login</button>
    </form>
  );
}
