import { create } from 'zustand'

type CounterState = {
    user: { username: string, email: string }
    token: string
    deleteToken: () => void
    saveToken: (newToken: string) => void
    setUser: (newUser: { username: string, email: string }) => void
    setIsValidToken: (isValid: boolean) => void
    isTokenValid: boolean

}

export const useAuthenticationStore = create<CounterState>((set) => ({
    token: "",
    user: { username: "", email: "" },
    isTokenValid: false,
    deleteToken: () => set((state) => ({ token: "" })),
    saveToken: (newToken) => set((state) => ({ token: newToken })),
    setUser: (newUser) => set((state) => {
        const { username, email } = newUser;
        return { user: { username, email } };
    }),
    setIsValidToken: (isValid) => set({ isTokenValid: isValid })



}))