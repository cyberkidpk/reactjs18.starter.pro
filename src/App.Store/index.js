import messengingReducer from '../App.Reducers/messanging.reducer';
import deviceStateReducer from '../App.Reducers/device.state.reducer';
import activePageReducer from '../App.Reducers/active.page.reducer';
import { combineReducersForStore } from '../App.Core/utils';

export const initialState = {
  messenging: { message: {} },
  deviceAndLayout: { deviceRes: {} },
  activePage: { apiUrl: '', refresh: false },
};
const appReducers = {
  messenging: messengingReducer,
  deviceAndLayout: deviceStateReducer,
  activePage: activePageReducer,
};

export const appStore = { initialState, store: combineReducersForStore(appReducers) };
