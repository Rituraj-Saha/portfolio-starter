import {createContext,useReducer} from 'react'

export const themeContext = createContext();

const initialState ={drakMode : true}

const themeReducer = (state, action) =>{
    switch(action.type)
    {
        case 'toogle':
            return {darkMode: !state.darkMode};
        default:
            return state;
    }
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    return(
        <themeContext.Provider value={{state,dispatch}}>
            {props.chidren}
        </themeContext.Provider>
    );
};