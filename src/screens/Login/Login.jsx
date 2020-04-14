import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { ConectarApiPost } from '../../shared/functions/conectarAPI';
import Security from '../../shared/autenticacao/security';

import './login.css';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onSubmitLogin = async (event) => {
        event.preventDefault();
        try {
            const result = await ConectarApiPost("https://curso-spring-boot-julio.herokuapp.com/login", { "email": email, "senha": password});

            const token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqdWxpb3NvdXphc2VuYUBnbWFpbC5jb20iLCJleHAiOjE1ODY4ODgyMjJ9.OknX4Irpfv8VRBwTOuzdsm5fGMaBgjGj225n0bMtvixy9IrUkOOXJFJqMvNcx7Acz2D9jzX52fEDw4rUF1a3hQ";

            Security.setAuthorizationToken(token);

            history.push("/home");
        } catch (e) {
            setMessage('Email ou senha inválidos');
        }
    }

    return (
        <div>
            <form onSubmit={onSubmitLogin}>
                <div className="box-login">
                    <input value={email} onChange={handleChangeEmail}/>
                    <input value={password} onChange={handleChangePassword} type="password" />
                    <div>{message}</div>
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>   
    );
}

export default Login;
