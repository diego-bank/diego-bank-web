import { create } from "zustand";
import { persist } from "zustand/middleware";

// store para gerenciamento de login
export const useAuthStore = create(persist((set) => ({
    accessToken: undefined,
    refreshToken: undefined,

    setAccessToken: (accessToken) => {
        set(state => ({...state, accessToken: accessToken,})
        );
    },
    setRefreshToken: (refreshToken) => 
        set(state => ({
            ...state,
            refreshToken: refreshToken,
        })),
    clearTokens: () =>
        set(state => ({
            accessToken: undefined,
            refreshToken: undefined,
        })),
    }),
    {
        name: 'auth-storage',
      }
    )
);