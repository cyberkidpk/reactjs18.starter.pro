import messengingReducer from '../App.Reducers/messanging.reducer';
import { combineReducersForStore } from '../App.Core/utils';

export const initialState = {
  messenging: { message: {} },
};
console.log(messengingReducer);
const appReducers = { messenging: messengingReducer };

export const appStore = { initialState, store: combineReducersForStore(appReducers) };
