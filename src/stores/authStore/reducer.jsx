import { AUTH_CHANGE_FIELDS, AUTH_CHANGE_REGISTER_FIELDS, AUTH_LOGIN_FULFILLED, AUTH_LOGIN_REJECTED, AUTH_LOGIN_REQUEST, AUTH_LOGOUT, AUTH_REGISTER_FULFILLED, AUTH_REGISTER_REJECTED, AUTH_REGISTER_REQUEST } from './types'
import { initialState } from '.';

const reducer = (state, { type, payload }) => {
    switch (type) {
        case AUTH_CHANGE_FIELDS:
          return {
            ...state,
            fields: {
              ...state.fields,
              [payload.key]: payload.value
            }
          }
        case AUTH_CHANGE_REGISTER_FIELDS:
          return {
            ...state,
            registerFields: {
              ...state.registerFields,
              [payload.key]: payload.value
            }
          }
        case AUTH_LOGIN_REQUEST:
          return {
            ...state,
            isLoading: true,
          }
    
        case AUTH_LOGIN_FULFILLED:
          return {
            ...state,
            isLoading: false,
            data: payload
          }
    
        case AUTH_LOGIN_REJECTED:
          return {
            ...state,
            isLoading: false,
          }
    
        case AUTH_REGISTER_REQUEST:
          return {
            ...state,
            isCreating: true,
          }
    
        case AUTH_REGISTER_FULFILLED:
          return {
            ...state,
            isCreating: false,
          }
    
        case AUTH_REGISTER_REJECTED:
          return {
            ...state,
            isCreating: false,
          }
        case AUTH_LOGOUT:
          return initialState
      }
}

export default reducer;
