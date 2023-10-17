import { AUTH_CHANGE_FIELDS, AUTH_CHANGE_REGISTER_FIELDS, AUTH_LOGIN_FULFILLED, AUTH_LOGIN_REJECTED, AUTH_LOGIN_REQUEST, AUTH_LOGOUT, AUTH_REGISTER_FULFILLED, AUTH_REGISTER_REJECTED, AUTH_REGISTER_REQUEST } from './types'
import { unstable_batchedUpdates } from 'react-dom';
import { authStore } from '.';

import api from '../../api';

const actions = (dispatch) => ({
    changeFields: (payload) => {
        dispatch({ type: AUTH_CHANGE_FIELDS, payload })
      },
      changeRegisterFields: (payload) => {
        dispatch({ type: AUTH_CHANGE_FIELDS, payload })
      },
      login: () => {
        unstable_batchedUpdates(async () => {
          const { fields } = authStore.getState();
    
          dispatch({ type: AUTH_LOGIN_REQUEST });
    
          try {
            const response = await api({ baseURL: "" }).post({
              url: '/auth/sign-in',
              data: fields
            })
    
            await dispatch({ type: AUTH_LOGIN_FULFILLED, payload: response?.data });
    
    
          } catch (e) {
            dispatch({ type: AUTH_LOGIN_REJECTED });
          }
        })
      },
    
      register: () => {
        unstable_batchedUpdates(async () => {
    
          const { fields } = authStore.getState();
    
          dispatch({ type: AUTH_REGISTER_REQUEST });
    
          try {
            await api({ baseURL: '' }).post({
              url: '/auth/signup',
              data: fields
            })
    
            dispatch({ type: AUTH_REGISTER_FULFILLED });
    
          } catch (e) {
            dispatch({ type: AUTH_REGISTER_REJECTED });
          }
        })
      },
      logout: () => {
        dispatch({ type: AUTH_LOGOUT });
      }
})

export default actions;
