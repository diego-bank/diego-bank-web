import { StyledContainer, StyledMain, StyledTitle } from './styles'

import { useState, useEffect } from 'react';

import Input from '../../components/Input'
import Form from '../../components/Form';
import Button from '../../components/Button';

import { api } from '../../services/api';
import { toast } from 'react-toastify';

import { useAuthStore } from '../../stores/authStore'
import { useNavigate } from 'react-router-dom';

import { Navigate } from 'react-router-dom'

function Login() {
    const setAccessToken = useAuthStore(state => state.setAccessToken);
    const setRefreshToken = useAuthStore(state => state.setRefreshToken);

    const navigate = useNavigate();

    const auth = useAuthStore(state => state.accessToken)

    async function login(e) {
            await api.post('api/token/', {
                'email': e.target.email.value,
                'password': e.target.password.value
            })
            .then((response) => {
                const accessToken = response.data.access;
                const refreshToken = response.data.refresh;

                setAccessToken(accessToken);
                setRefreshToken(refreshToken);

                console.log(accessToken, refreshToken);
            })
            .then(() => {
                navigate('/profile', { replace: true })
            })
            .catch((e) => {
                console.log(e)
                toast.error('This user already exists ', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }) 
       
    }

    const handleLogin = (e) => {
        e.preventDefault();

        login(e);
    }

    return(
        <>
            {auth ? (<Navigate to="/" />)
            : (<StyledMain>
                <StyledTitle>
                    Sign In
                </StyledTitle>
                    <Form method={'post'} onSubmit={handleLogin}>
                        <Input name={'email'} label={'Email'} type={'email'} />
                        <Input name={'password'} label={'Password'} type={'password'} minLength={6} />
                        <Button type={'submit'} text={'Login'} />
                    </Form>
                </StyledMain>
            )}
        </>
    )
}

export default Login;