import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { postUser, userPolicy } from '../apiService';
import Empty from '../Assets/sun.jpg';

const SignIn = ({ setData, error, setError }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let token;

        if (username && password) {
            let res = await postUser(username, password);
            token = res.access_token;
            let result = await userPolicy(token);
            setData(result);
            history.push('/MyPolicy');
        } else {
            setError(true);
        }

        e.target.reset();
        setUsername('');
        setPassword('');
    };

    return (
        <div className="sign-in">
            <section className="picture">
                <img src={Empty} alt="login" />
            </section>
            <section className="formSection">
                <div className="formContainer">
                    <h1>Sign In</h1>
                    <div className="line"></div>
                    <form onSubmit={handleSubmit} id="form">
                        <TextField
                            label="Username"
                            id="username-input"
                            name="username"
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <TextField
                            id="password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            data-testid="submit"
                            color="primary"
                            type="submit"
                            id="submit"
                        >
                            Sign In
                        </Button>
                    </form>
                    <p className="warning">
                        {error
                            ? '❗️ Username or password not recognised. Please try again.'
                            : ''}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default SignIn;
