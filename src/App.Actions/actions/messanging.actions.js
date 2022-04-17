import { APP_DEVICE_LAYOUT_CONST, APP_MESSENGING_CONST } from '../../App.Constants';

export const MESSENGING_ACTIONS = {
  fireSuccessMsg: { type: APP_MESSENGING_CONST.MSG.SUCCESS },
};

export const DEVICE_AND_LAYOUT_ACTIONS = {
  fireDeviceMsg: { type: APP_DEVICE_LAYOUT_CONST.MSG.ISMOBILE },
};
