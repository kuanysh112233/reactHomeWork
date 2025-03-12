import { useState } from 'react'
import './App.css'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleRegister = () => {
    setIsRegistering(true);
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    setIsRegistering(false);
  };


  return (
    <>
    <div className="app-container">
      {!isLoggedIn ? (
        <>
          <h1>Жүйеге кіру қажет</h1>
          <button className="login-button" onClick={handleLogin}>Login</button>
          {!isRegistering && <button className="register-button" onClick={handleRegister}>Register</button>}

          {isRegistering && (
            <div className="register-form">
              <h2>Жаңа тіркелу</h2>
              <form onSubmit={handleSubmitRegister}>
                <input
                  type="text"
                  placeholder="Email немесе Телефон"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                />
                <br />
                <input
                  type="password"
                  placeholder="Жаңа құпия сөз"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button className="submit-button" type="submit">Register</button>
              </form>
            </div>
          )}
        </>
      ) : (
        <>
          <h1>Бастапқы бетке қош келдіңіз</h1>
          <button className="logout-button" onClick={handleLogout}>Log out</button>
        </>
      )}
    </div>
    </>
  )
}


