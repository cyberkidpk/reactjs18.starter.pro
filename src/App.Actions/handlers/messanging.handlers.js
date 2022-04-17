/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { MESSENGING_ACTIONS, DEVICE_AND_LAYOUT_ACTIONS } from '../actions/messanging.actions';

const extractDispatch = (dispatch, payload) => dispatch({ ...MESSENGING_ACTIONS.fireSuccessMsg, ...payload });
const extractDeviceDispatch = (dispatch, payload) => dispatch({ ...DEVICE_AND_LAYOUT_ACTIONS.fireDeviceMsg, ...payload });

export const MESSENGING_HANDLERS = {
  dispatchSuccessMsg: extractDispatch,
  dispatchDeviceResolution: extractDeviceDispatch
};
