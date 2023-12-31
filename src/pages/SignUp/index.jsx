import { StyledMain, StyledContainer, StyledTitle } from './styles'

import { useState, useEffect } from 'react';

import Input from '../../components/Input'
import Form from '../../components/Form';
import Button from '../../components/Button';

import { api } from "../../services/api";
import { toast } from 'react-toastify';

import { useAuthStore } from '../../stores/authStore'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function SignUp() {
    const setAccessToken = useAuthStore(state => state.setAccessToken);
    const setRefreshToken = useAuthStore(state => state.setRefreshToken);

    const auth = useAuthStore(state => state.accessToken)

    const navigate = useNavigate();

    // função de login, para logar após cadastro
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
    }

    // função para realizar cadastro
    async function signUp(e) {
        await api.post('api/v1/user/create/', {
            "email": e.target.email.value,
            "password": e.target.password.value,
            "first_name": e.target.firstName.value,
            "last_name": e.target.lastName.value,
            "cpf": e.target.cpf.value,
            "url_image": null
        })
        .then((response) => {
            toast.success('User Created ', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            login(e);
        })
        .catch((response) => {
            toast.error('Invalid Information ', {
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

    // chama sign up ao clicar no botão
    const handleSignUp = (e) => {
        e.preventDefault();

        signUp(e);
    }

    return(
        <>
        {
            auth ? (
                <Navigate to="/" />
            ) : (
                <StyledMain>
                    <StyledTitle>
                        Sign Up
                    </StyledTitle>
                        <Form method={'post'} onSubmit={handleSignUp}>
                            <Input name={'firstName'} label={'First Name'} type={'text'} />
                            <Input name={'lastName'} label={'Last Name'} type={'text'} />
                            <Input name={'cpf'} label={'CPF'} type={'text'} minLength={11} maxLength={11} />
                            <Input name={'email'} label={'Email'} type={'email'} />
                            <Input name={'password'} label={'Password'} type={'password'} minLength={6} />
                            <Button type={'submit'} text={'Sign Up'}/>
                        </Form>
                </StyledMain>
            )
        }
        </>
    )
}

export default SignUp;