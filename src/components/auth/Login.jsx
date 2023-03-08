import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import Button from '../common/Button';
import AuthDetails from './AuthDetails';

function Login({ title }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = (e) => {
        //to Login
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => { console.log(userCredential); })
            .catch((error) => { console.log(error); });
    };
    return (
        <div className="login-container">
            <form onSubmit={login}>
                <h1>Login</h1>
                <TextField
                    type="email"
                    label="Email"
                    placeholder="sonaco2015@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    type="password"
                    label="Password"
                    placeholder="Test123"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="standard" />
                <br />
                <Button type="submit" title={title} />
            </form>
        <AuthDetails title="Logout" />
        </div>
    );
}
export default Login