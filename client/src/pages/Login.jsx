// LoginComponent.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // <-- Importera useNavigate

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/users/login', {
        email,
        password,
      });

      // Om inloggningen är framgångsrik, anropa callback-funktionen
      localStorage.setItem('loggedIn', 'true');
      onLogin();
      navigate('/admin');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login bg-gray">
      <h1>Login</h1>
      <form action="POST">
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="submit" onClick={submit} />
      </form>
    </div>
  );
}