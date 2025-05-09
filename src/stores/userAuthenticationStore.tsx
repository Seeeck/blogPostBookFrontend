import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
type CounterState = {
    user: { username: string, email: string }
    token: string
    isLogged:boolean
    saveToken: (newToken: string) => void
    setUser: (newUser: { username: string, email: string }) => void
    setIsLogged:(logged:boolean)=>void


}

export const useAuthenticationStore =  create<CounterState>((set) => ({
    token: localStorage.getItem("token") || "",
    user: {
        username: localStorage.getItem("username") || "",
        email: localStorage.getItem("email") || ""
    },
    isLogged:localStorage.getItem("token")? true:false,
    setIsLogged: (logged: boolean) => set(() => ({ isLogged: logged })),
    //setear en local storage
    saveToken: (newToken) => set((state) => {
        localStorage.setItem("token", newToken);
        return ({ token: newToken })
    }),
    //setear en local storage
    setUser: (newUser) => set((state) => {
        localStorage.setItem("username", newUser.username)
        localStorage.setItem("email", newUser.email)
        const { username, email } = newUser;
        return { user: { username, email } };
    }),

}))