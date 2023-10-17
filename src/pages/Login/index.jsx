import { StyledContainer, StyledMain } from './styles'

import { useState, useEffect } from 'react';

import Input from '../../components/Input'
import Form from '../../components/Form';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';

function Login() {

    const [tipoPessoa, setTipoPessoa] = useState(1)

    const handleLogin = (e) => {
        e.preventDefault();
    }

    const handleTipoPessoa = (e) => {
        setTipoPessoa(e.value)
    }

    useEffect(() => {
        
    }, [tipoPessoa])

    return(
        <StyledMain>
            <StyledContainer>
                <Dropdown handleChange={handleTipoPessoa} options={[{value: 1, label: 'Pessoa Física'}, {value: 0, label: 'Pessoa Jurídica'}]} />
            </StyledContainer>
            {tipoPessoa ? (
                <Form method={'post'} onSubmit={handleLogin}>
                    <Input name={'cpf'} label={'CPF'} type={'text'} />
                    <Input name={'password'} label={'Password'} type={'password'} />
                    <Button type={'submit'} text={'Login'}/>
                </Form>
            ) : (
                <Form method={'post'} onSubmit={handleLogin}>
                    <Input name={'cnpj'} label={'CNPJ'} type={'text'} />
                    <Input name={'password'} label={'Password'} type={'password'} />
                    <Button type={'submit'} text={'Login'}/>
                </Form>
            )}
            
        </StyledMain>
    )
}

export default Login;