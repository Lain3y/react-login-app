import React, { useState } from 'react';
import './App.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
    <div>
      <h1>👩🏼 Welcome to My Login App 👋🏻</h1>
      <label>
        User name:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const LoginSuccessPage = ({ username, onLogout }) => {
  return (
    <div>
      <h2>🎉 Welcome, {username}! 🥂</h2>
      <p>Login Successful</p>
      <button onClick={onLogout}> 🏃🏽 Click here to sign out</button>
    </div>
  );
};

const LoginUnsuccessfulPage = ({ onReturnToLogin }) => {
  return (
    <div>
      <h1>❌</h1>
      <p> Login unsuccessful. Please try again.</p>
      <button onClick={onReturnToLogin}>⬅️Return to login</button>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [enteredUsername, setEnteredUsername] = useState('');

  const handleLogin = (enteredUsername, enteredPassword) => {
    // Check if the entered credentials are correct
    if (enteredUsername === 'Kamara' && enteredPassword === 'coding23') {
      setEnteredUsername(enteredUsername);
      setIsLoggedIn(true);
      setIsLoginFailed(false);
    } else {
      setIsLoggedIn(false);
      setIsLoginFailed(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleReturnToLogin = () => {
    setIsLoginFailed(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <LoginSuccessPage username={enteredUsername} onLogout={handleLogout} />
      ) : isLoginFailed ? (
        <LoginUnsuccessfulPage onReturnToLogin={handleReturnToLogin} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
