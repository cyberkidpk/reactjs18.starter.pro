/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import MESSENGING_ACTIONS from '../actions/messanging.actions';

const extractDispatch = (dispatch, payload) => dispatch({ ...MESSENGING_ACTIONS.fireSuccessMsg, ...payload });

export const MESSENGING_HANDLERS = {
  dispatchSuccessMsg: extractDispatch,
};
