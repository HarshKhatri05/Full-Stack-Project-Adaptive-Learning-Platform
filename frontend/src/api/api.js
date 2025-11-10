import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const loginUser = (data) => api.post('/auth/login', data);
export const signupUser = (data) => api.post('/auth/signup', data);
export const fetchQuestions = (token) => api.get('/questions', { headers: { Authorization: `Bearer ${token}` }});
export const submitAttempt = (token, data) => api.post('/attempts', data, { headers: { Authorization: `Bearer ${token}` }});

export default api;
