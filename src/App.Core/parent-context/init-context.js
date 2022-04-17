/* eslint-disable react/require-default-props */
import React, { createContext, useReducer, useContext } from 'react';
import { object, func } from 'prop-types';

const Context = createContext();

export const APPStateProvider = ({ store, initialState = {}, children }) => {
  const value = useReducer(store, initialState);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

APPStateProvider.propTypes = {
  store: func,
  // eslint-disable-next-line react/forbid-prop-types
  initialState: object,
};

export const useAppState = () => {
  return useContext(Context);
};
