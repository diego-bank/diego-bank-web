import { StyledContainer, StyledBanner, StyledTitle, StyledIcon, StyledImage } from "./styles";
import React, { useEffect, useState } from "react";

import Input from '../../components/Input'

import { api } from '../../services/api'
import { useUserStore } from '../../stores/userStore'
import { useAccountStore } from '../../stores/accountStore'
import { useAuthStore } from "../../stores/authStore";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Profile() {
  const [loading, setLoading] = useState(true);

  const setUserInformation = useUserStore(state => state.setUserInformation);
  const setAccountInformation = useAccountStore(state => state.setAccountInformation);
  const clearTokens = useAuthStore(state => state.clearTokens);

  const accessToken = useAuthStore(state => state.accessToken)

  const id_user = useUserStore(state => state.id);
  const email = useUserStore(state => state.email);
  const first_name = useUserStore(state => state.first_name);
  const last_name = useUserStore(state => state.last_name);
  const cpf = useUserStore(state => state.cpf);
  const url_image = useUserStore(state => state.url_image);

  const id_account = useAccountStore(state => state.id);
  const number_account = useAccountStore(state => state.number);
  const agency_account = useAccountStore(state => state.agency);
  const balance_account = useAccountStore(state => state.balance);

  useEffect(() => {

    async function userInfo() {
        await api.get('api/v1/user/me/', {
            headers: {
                Authorization: "Bearer " + accessToken,
            }
        })
        .then((response) => {
            const id = response.data.id
            const email = response.data.email
            const first_name = response.data.first_name
            const last_name = response.data.last_name
            const cpf = response.data.cpf
            const url_image = response.data.url_image

            setUserInformation(
                id,
                email,
                first_name,
                last_name,
                cpf,
                url_image,
            )
        })
        .then(() => {
            accountId();
        })
        .catch((e) => {
            console.log(e);
            clearTokens();
        })
    }

    async function accountId() {
        await api.get('api/v1/accounts/', {
            headers: {
                Authorization: "Bearer " + accessToken,
            }
        })
        .then((response) => {
            const id = response.data[0].id
            
            accountInfo(id)
        })
        .catch((e) => {
            console.log(e);
            clearTokens();
        })
    }

    async function accountInfo(id) {
        await api.get(`api/v1/accounts/${id}/`, {
            headers: {
                Authorization: "Bearer " + accessToken,
            }
        })
        .then((response) => {
            const agency = response.data.agency
            const number = response.data.number
            const balance = response.data.balance
            
            setAccountInformation(
                id,
                number,
                agency,
                balance,
            )
        })
        .then(() => {
            setLoading(false)
        })
        .catch((e) => {
            console.log(e);
            clearTokens();
        })
    }

    userInfo()

})

  return(
      <StyledContainer>
        {loading ? ("Loading...") : ( 
        <>
        <StyledBanner>
            <article>
                <StyledIcon>
                    {url_image ? (<StyledImage src={url_image} />) : (<FontAwesomeIcon icon={faUser} size="2xl" />)}
                </StyledIcon>
                <StyledTitle>
                    {first_name} {last_name}
                </StyledTitle>

            </article>
            <section>
                <Input label={"Agency"} type={'text'} name={'agency'} value={agency_account} disabled={true} />
                <Input label={"Account Number"} type={'text'} name={'number_account'} value={number_account} disabled={true} />
                <Input label={"Balance"} type={'text'} name={'balance'} value={'R$' + balance_account} disabled={true} />
            </section>
            <section>
                <Input label={"Email"} type={'text'} name={'email'} value={email} disabled={true} />
                <Input label={"CPF"} type={'text'} name={'cpf'} value={cpf} disabled={true} />
            </section>
        </StyledBanner>
        </>
        )}
      </StyledContainer>
  )
}

export default Profile;