import messengingReducer from '../App.Reducers/messanging.reducer';
import deviceStateReducer from '../App.Reducers/device.state.reducer';
import { combineReducersForStore } from '../App.Core/utils';

export const initialState = {
  messenging: { message: {} },
  deviceAndLayout: { deviceRes: {} },
};
console.log(messengingReducer);
const appReducers = { messenging: messengingReducer, deviceAndLayout: deviceStateReducer };

export const appStore = { initialState, store: combineReducersForStore(appReducers) };
