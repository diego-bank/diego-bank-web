import { StyledMain, StyledContainer, StyledTitle } from './styles'

import { useState, useEffect } from 'react';

import Input from '../../components/Input'
import Form from '../../components/Form';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';

function SignUp() {

    const [tipoPessoa, setTipoPessoa] = useState(1)

    const handleSignUp = (e) => {
        e.preventDefault();
    }

    const handleTipoPessoa = (e) => {
        setTipoPessoa(e.value)
    }

    useEffect(() => {
        
    }, [tipoPessoa])

    return(
        <StyledMain>
            <StyledTitle>
                Sign Up
            </StyledTitle>
            {/* <StyledContainer>
                <Dropdown handleChange={handleTipoPessoa} options={[{value: 1, label: 'Pessoa Física'}, {value: 0, label: 'Pessoa Jurídica'}]} />
            </StyledContainer> */}
            {tipoPessoa ? 
            (
                <Form method={'post'} onSubmit={handleSignUp}>
                    <Input name={'name'} label={'Name'} type={'text'} />
                    <Input name={'cpf'} label={'CPF'} type={'text'} />
                    <Input name={'birthday'} label={'Birthday'} type={'date'} />
                    <Input name={'email'} label={'Email'} type={'text'} />
                    <Input name={'phone'} label={'Phone'} type={'text'} />
                    <Input name={'password'} label={'Password'} type={'password'} />
                    <Button type={'submit'} text={'Sign Up'}/>
                </Form>
            )
            : (
                <Form method={'post'} onSubmit={handleSignUp}>
                    <Input name={'name'} label={'Name'} type={'text'} />
                    <Input name={'cnpj'} label={'CNPJ'} type={'text'} />
                    <Input name={'birthday'} label={'Birthday'} type={'date'} />
                    <Input name={'email'} label={'Email'} type={'text'} />
                    <Input name={'phone'} label={'Phone'} type={'text'} />
                    <Input name={'password'} label={'Password'} type={'password'} />
                    <Button type={'submit'} text={'Sign Up'}/>
                </Form>
            )}
        </StyledMain>
    )
}

export default SignUp;