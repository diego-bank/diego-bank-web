import { create } from "zustand"
import { persist, redux } from "zustand/middleware"

export const initialState = {
    fields: {
        email: '',
        password: '',
    },
    registerFields: {
        email: '',
        password: '',
    },
    isLoading: false,
    isCreating: false,
    data: null
}

export const authStore = create(persist(
    redux(reducer, initialState),
    {
        name: 'auth-store'
    }
))