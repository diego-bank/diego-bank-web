import { StyledMain } from './styles'

import Input from '../../components/Input'

function Login() {
    return(
        <StyledMain>
            <Input name={'name'} label={'Name'} type={'text'} />
        </StyledMain>
    )
}

export default Login;