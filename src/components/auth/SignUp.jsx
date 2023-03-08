import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { auth } from '../../firebase-config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import Button from '../common/Button';

function SignUp({ title }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="sign-up-container">
            <form onSubmit={signUp}>
                <h1>Sign Up</h1>
                <TextField
                    type="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="standard" />
                <br />
                <Button type="submit" title={title} />
            </form>
        </div>
    );
}
export default SignUp