import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const ContextProvider = ({ children }) => {
    const [items, setItems] = useState({
        amt: [],
        cost: 0
    })

    const updateItems = (newItems) => {
        setItems((prev) => ({ ...prev, ...newItems }))
    }

    return (
        <AppContext.Provider value={{ items, updateItems }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)


