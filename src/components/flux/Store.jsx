import React, { createContext, useReducer } from 'react'
import { popReducer } from './reducers/pop.reducer'
import { tabReducer } from './reducers/tab.reducer'

export const initialState = { tab: 0, pop: 1 }
export const storeContext = createContext(initialState)

const mainReducer = (state = initialState, action) => (
    {
        pop: popReducer(state, action),
        tab: tabReducer(state, action)
    }
)

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return (
        <storeContext.Provider value={{ state, dispatch }}>
            {children}
        </storeContext.Provider>
    )
}