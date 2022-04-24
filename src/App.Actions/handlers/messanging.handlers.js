/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { MESSENGING_ACTIONS, DEVICE_AND_LAYOUT_ACTIONS, APP_ACTIVE_PAGE_ACTIONS } from '../actions/messanging.actions';

const extractDispatch = (dispatch, payload) => dispatch({ ...MESSENGING_ACTIONS.fireSuccessMsg, ...payload });
const extractDeviceDispatch = (dispatch, payload) => dispatch({ ...DEVICE_AND_LAYOUT_ACTIONS.fireDeviceMsg, ...payload });
const fireSetAppActivePageAPIDispatch = (dispatch, payload) => dispatch(
  {
    ...APP_ACTIVE_PAGE_ACTIONS.setActivePageAPIUrl,
    ...payload
  }
);
const isRefreshDispatch = (dispatch, payload) => dispatch({ ...APP_ACTIVE_PAGE_ACTIONS.isRefresh, ...payload });
const setAppActivePageDataDispatchFunc = (dispatch, payload) => dispatch({ ...APP_ACTIVE_PAGE_ACTIONS.setActivePageData, ...payload });

export const MESSENGING_HANDLERS = {
  dispatchSuccessMsg: extractDispatch,
  dispatchDeviceResolution: extractDeviceDispatch,
  setAppActivePageAPIDispatch: fireSetAppActivePageAPIDispatch,
  dispatchIsRefresh: isRefreshDispatch,
  setAppActivePageDataDispatch: setAppActivePageDataDispatchFunc
};
