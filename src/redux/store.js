import React, { createContext, useEffect, useReducer } from "react";
import "aos/dist/aos.css";

import { Reducer, InitialState } from "./reducer";
import Aos from "aos";

export const Context = createContext(InitialState);
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  const value = { state, dispatch };

  useEffect(() => {
    Aos.init({duration:1000})
  }, [])

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const Store = ({ element }) => <Provider>{element}</Provider>;
