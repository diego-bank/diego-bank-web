import { create } from "zustand";

// store para gerenciamento das informações de conta
export const useAccountStore = create((set) => ({
    id: undefined,
    number: undefined,
    agency: undefined,
    balance: undefined,

    setAccountInformation: (id, number, agency, balance) => {
        set(state => ({
            id: id,
            number: number,
            agency: agency,
            balance: balance,
        })
        );
    },
    clearAccountInformation: () =>
        set(state => ({
            id: undefined,
            number: undefined,
            agency: undefined,
            balance: undefined,
        })),
    })
);