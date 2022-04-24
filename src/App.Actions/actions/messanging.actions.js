import { APP_DEVICE_LAYOUT_CONST, APP_MESSENGING_CONST, APP_ACTIVE_PAGE_CONST } from '../../App.Constants';

export const MESSENGING_ACTIONS = {
  fireSuccessMsg: { type: APP_MESSENGING_CONST.MSG.SUCCESS },
};

export const DEVICE_AND_LAYOUT_ACTIONS = {
  fireDeviceMsg: { type: APP_DEVICE_LAYOUT_CONST.MSG.ISMOBILE },
};

export const APP_ACTIVE_PAGE_ACTIONS = {
  setActivePageAPIUrl: { type: APP_ACTIVE_PAGE_CONST.MSG.SETAPIURL },
  isRefresh: { type: APP_ACTIVE_PAGE_CONST.MSG.ISREFRESH }
};
