import { create } from "zustand";

// store para gerenciar informações do usuário
export const useUserStore = create((set) => ({
    id: undefined,
    email: undefined,
    first_name: undefined,
    last_name: undefined,
    cpf: undefined,
    url_image: undefined,

    setUserInformation: (id, email, first_name, last_name, cpf, url_image) => {
        set(state => ({
            id: id,
            email: email,
            first_name: first_name,
            last_name: last_name,
            cpf: cpf,
            url_image: url_image,
        })
        );
    },
    clearUserInformation: () =>
        set(state => ({
            id: undefined,
            email: undefined,
            first_name: undefined,
            last_name: undefined,
            cpf: undefined,
            url_image: undefined,
        })),
    })
);