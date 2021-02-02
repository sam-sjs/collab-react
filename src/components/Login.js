import React, {useState} from 'react'
import api from '../lib/api'
import axios from 'axios'
import './Login.css'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    api.postLogin({
      email: email,
      password: password
    })
    .then(response => {
      const token = 'Bearer ' + response.data.token;
      axios.defaults.headers.common['Authorization'] = token;
      localStorage.setItem('jwtToken', token);
    })
    .catch(err => {
      console.warn(err);
    });
  }

  return (
    <div className="login">
      <h2>Login:</h2>
      <form id="newLogin" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          placeholder="Enter email"
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="image">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          onChange={e => setPassword(e.target.value)}
        />

        <button form="newLogin">Login!</button>
      </form>
    </div>
  );
}

export default Login
