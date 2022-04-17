import { APP_MESSENGING_CONST } from '../App.Constants';

export default function messengingReducer(state, action = {}) {
  const { message, type, reqPayMod } = action;
  const { CONFIG: { MESSANGING_KEY } } = APP_MESSENGING_CONST;
  console.log(APP_MESSENGING_CONST.MSG.SUCCESS);
  switch (type) {
    case APP_MESSENGING_CONST.API.SERVICE_FAILED:
      return {
        ...state,
        [MESSANGING_KEY]: [...state[MESSANGING_KEY], message],
      };
    case APP_MESSENGING_CONST.MSG.SUCCESS:
      return {
        ...state,
        [MESSANGING_KEY]: { ...state[MESSANGING_KEY], ...{ message, reqPayMod } },
      };
    default:
      return state;
  }
}
