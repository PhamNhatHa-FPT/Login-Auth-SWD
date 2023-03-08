import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from '../../firebase-config';
import Button from '@mui/material/Button';
import { getUserDoc } from "../connectFirestore/GetUser";

function AuthDetails({ title }) {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("sign out successful");
            })
            .catch((error) => console.log(error));
    };
    var role = null;
    if (authUser != null) {
        getUserDoc(authUser.uid, (userData) => {
            sessionStorage.setItem("userObject", JSON.stringify(userData));
        })
        // Store the object in session storage
        role = JSON.parse(sessionStorage.getItem("userObject")).userRole;
        console.log(JSON.parse(sessionStorage.getItem("userObject")));
    }

    return (
        <div>
            {authUser ? (
                <>
                    <p>{`Signed In as ${authUser.email} ${role}`}</p>
                    <Button onClick={userSignOut} variant="contained">{title}</Button>
                </>
            ) : (
                <p>Signed Out</p>
            )}
        </div>
    );
}

export default AuthDetails