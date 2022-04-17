import { APP_DEVICE_LAYOUT_CONST } from '../App.Constants';

export default function deviceStateReducer(state, action = {}) {
  const { deviceRes, type, reqPayMod } = action;
  const { CONFIG: { DEVICE_LAYOUT_KEY } } = APP_DEVICE_LAYOUT_CONST;

  switch (type) {
    case APP_DEVICE_LAYOUT_CONST.MSG.ISMOBILE:
      return {
        ...state,
        [DEVICE_LAYOUT_KEY]: { ...state[DEVICE_LAYOUT_KEY], ...{ deviceRes } },
      };
    default:
      return state;
  }
}
