import React, { useState } from 'react'
import useFetch from './useFetch'
export const API_ENDPOINT = 'https://www.omdbapi.com/?apikey=4bba5af0'
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [query, setQuery] = useState('marvel');
    const { loading, error, data: movies } = useFetch(`&s=${query}`);
    return (
        <AppContext.Provider value={{ loading, error, movies, query, setQuery }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return React.useContext(AppContext);
}

export {AppContext, AppProvider}
