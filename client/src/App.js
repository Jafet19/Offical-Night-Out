import { useState, useEffect } from 'react';
import Auth from './Auth/Auth';
import Register from './Auth/Register';
// import Navbar from './NavBar';

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

  // function onLogout() {
  //   setUser('');
  // }

  if (!user) {
    //RENDER BASED ON REGISTER OR LOGIN
    const RenderUser = needToRegister ? (
      <Register onLogin={onLogin} onCancelClick={onRegister} />
    ) : (
      <Auth onLogin={onLogin} onRegisterClick={onRegister} />
    );
    return RenderUser;
  } else {
    return (
    <div className='App'>
      <h1>Hello</h1>
    </div>
  );
}
}
export default App;