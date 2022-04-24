import { APP_ACTIVE_PAGE_CONST } from '../App.Constants';

export default function activePageReducer(state, action = {}) {
  const { apiUrl, type, reqPayMod } = action;
  const { CONFIG: { ACTIVE_PAGE_KEY } } = APP_ACTIVE_PAGE_CONST;

  switch (type) {
    case APP_ACTIVE_PAGE_CONST.MSG.SETAPIURL:
      return {
        ...state,
        [ACTIVE_PAGE_KEY]: { ...state[ACTIVE_PAGE_KEY], ...{ apiUrl } },
      };
      case APP_ACTIVE_PAGE_CONST.MSG.ISREFRESH:
      return {
        ...state,
        [ACTIVE_PAGE_KEY]: { ...state[ACTIVE_PAGE_KEY], ...{ apiUrl } },
      };
    default:
      return state;
  }
}
