import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//Initialise State
const iniState = {
        list: [{
                id: 1,
                text: 'Flower',
                amount: -20
            },
            {
                id: 2,
                text: "Mariem",
                amount: 100
            },
            {
                id: 3,
                text: "book",
                amount: -30
            }
        ]

    }
    //create context
export const GlobalContext = createContext(iniState);
//provider component
export const GlobalProvider = ({ children }) => {
        const [state, dispatch] = useReducer(AppReducer, iniState);

        function deleteBokk(id) {
            dispatch({
                type: 'DELETE_BOOK',
                payload: id
            })
        }

        function Add(list) {
            dispatch({
                type: "ADD_BOOK",
                payload: list
            });
            console.log(iniState)
        }
        return ( < GlobalContext.Provider value = {
                {
                    list: state.list,
                    deleteBokk,
                    Add
                }
            } >

            { children }

            <
            /GlobalContext.Provider>)
        }