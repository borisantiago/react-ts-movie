import { Context } from './AppContext';
import { AppState, PropsProviders } from "../interfaces/interfaces";


const state : AppState = {
    name: 'Black Widow',
    url: 'http://marvel.io/bw',
    time: '2 horas'
}

export const AppProvider = ({children}: PropsProviders) => {
    return(
        <Context.Provider value={{ state }}>
            { children }
        </Context.Provider>  
    )
}