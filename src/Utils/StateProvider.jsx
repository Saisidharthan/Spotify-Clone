/*context api*/ 
import { createContext,useContext,useReducer } from "react";
export const StateContext=createContext();
export const StateProvider =({children,initialstate,reducer}) => (
    <StateContext.Provider value={useReducer(reducer,initialstate)}>
        {children}
    </StateContext.Provider>
);

export const useStateProvider=()=>useContext(StateContext);