import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Register from './Auth-Register/Register';
import NavBar from './NavBar/NavBar';
import './App.scss'

function App() {
  const [user, setUser] = useState(null)
  const [needToRegister, setNeedToRegister] = useState(false)

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function onLogin(user) {
    setUser(user);
  }

  function onRegister(value) {
    setNeedToRegister(value);
  }

  function onLogout() {
    setUser('');
  }

  if (!user) {
    //RENDER REGISTER OR LOGIN FORM
    return(
      <Register onLogin={onLogin} onCancel={onRegister} />
    )
  } else {
    return (
      <div className='App'>
          <Routes>
            <Route path='/' element={<NavBar onLogout={onLogout}/>} />
          </Routes>
      </div>
    );
  }
}
export default App;