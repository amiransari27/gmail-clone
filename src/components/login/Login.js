import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { auth, provider } from '../../firebase'
import "./Login.css"

function Login() {
    const dispatch = useDispatch()
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({user}) =>{
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: ""
                }))
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="newgmaillogo.jpg" alt="" />
                
                <Button
                    variant="contained"
                    color="primary"
                    onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
