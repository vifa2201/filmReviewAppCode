// importerar tillägg och komponenter
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  
import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Login({ onLogin }) {
  //state variabler 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

//funktion för att logga in användare
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
    <>
    <div className="container">
    <ul class="breadcrumb">
    <li>  <Link to="/"> Hem
        </Link></li>
  <li>Logga in </li>
 
</ul>
</div>
 {/* inloggningsformulär*/}
    <section className='bg-grey flex justify-center items-center p-60'>
    <div className="login bg-gray rounded ">
    <h1 className="text-4xl font-bold mb-6">Logga in till admin</h1>
    <form action="POST" className="flex flex-col space-y-4" id='login'>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="input-field p-2 rounded"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="p-2 rounded"
      />
      <input
        type="submit"
        onClick={submit}
        value="Logga in"
        className="bg-black text-white py-2 rounded hover:bg-gray-800 cursor-pointer"
      />
    </form>
  </div>
  </section>
  </>
  );
}