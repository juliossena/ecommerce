import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onSubmitLogin = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onSubmitLogin}>
                <div className="box-login">
                    <input value={email} onChange={handleChangeEmail}/>
                    <input value={password} onChange={handleChangePassword} type="password" />
                    <button type="submit">Entrar</button>
                </div>
            </form>
            
        </div>   
    );
}

export default Login;
