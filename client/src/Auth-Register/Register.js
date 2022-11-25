import React, { useState } from 'react';
import './Auth.scss'


function Register({ onLogin, onCancel }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');


    // function for toggle movement across signin/signup buttons
    function btnSignUp() {
        document.querySelector('.container').classList.toggle('change')
    }
    function btnSignIn() {
        document.querySelector('.container').toggle('change')
    }

    // starting code for Registration
    function handleRegister(event) {
        event.preventDefault();
        const info = {
            username,
            password,
        }
        if (password === passwordConfirmation) {
            fetch('/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(info),
            })
                .then(res => {
                    if (res.ok) {
                        res.json()
                            .then(onLogin)
                    } else {
                        res.json()
                            .then(event => alert(event.error))
                    }
                })
        } else {
            setUsername('')
            setPassword('')
            setPasswordConfirmation('')
        }
    }


    function cancelClick() {
        onCancel(false)
    }


    //Starting code for Login
    function handleLogin(event) {
        event.preventDefault();
        const user = {
            username,
            password
        }
        fetch('/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(onLogin)
                } else {
                    res.json().then(event => alert(event.error))
                }
            })
    }

    return (
        <div className="container">
            <div className="form-container signin-container align-center flex-col">
                <h2>Sign in</h2>
                <div className="social-container align-center">
                    <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com"><i className="fa fa-google"></i></a>
                    <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="text" id='username' value={username}onChange={(e) => setUsername(e.target.value)} />
                <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <p>Forgot your password?</p>
                <button type="submit" className="btn" onClick={handleLogin}>
                    Sign in
                </button>
            </div>

            <div className="form-container signup-container align-center flex-col">
                <h2>Create Account</h2>
                <div className="social-container">
                    <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com"><i className="fa fa-google"></i></a>
                    <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>
                    or use your email for registration
                </span>
                <input type="text" name="" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" name="" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" name="" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                <button type="submit" className="btn"  onClick={handleRegister}>
                    Sign up
                </button>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="panel-sign-up align-center flex-col">
                        <h2>Hello, Friend!</h2>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="btn btn-transparent" id="btn-sign-up" onClick={btnSignUp}>
                            Sign up
                        </button>
                    </div>
                    <div className="panel-sign-in align-center flex-col">
                        <h2>Welcome back!</h2>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="btn btn-transparent" id="btn-sign-in" onClick={btnSignIn}>
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register
