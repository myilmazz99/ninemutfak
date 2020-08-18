import React, { useReducer, useContext, createContext } from "react";
import * as actionTypes from "./actionTypes";

const UIStateContext = createContext();
const UIDispatchContext = createContext();

let initialState = {
  sectionAboutPosition: 0,
  sectionSpeciesPosition: 0,
  sectionContactPosition: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SECTION_ABOUT_POS:
      return { ...state, sectionAboutPosition: action.payload };
    case actionTypes.SET_SECTION_SPECIES_POS:
      return { ...state, sectionSpeciesPosition: action.payload };
    case actionTypes.SET_SECTION_CONTACT_POS:
      return { ...state, sectionContactPosition: action.payload };
    default:
      return state;
  }
};

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <UIDispatchContext.Provider value={dispatch}>
      <UIStateContext.Provider value={state}>
        {children}
      </UIStateContext.Provider>
    </UIDispatchContext.Provider>
  );
};

export const useStateUI = () => useContext(UIStateContext);
export const useDispatchUI = () => useContext(UIDispatchContext);
