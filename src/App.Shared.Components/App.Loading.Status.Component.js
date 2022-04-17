/* eslint-disable max-len */
import React, { useEffect, useMemo } from 'react';
import { MESSENGING_HANDLERS } from '../App.Actions';
import { APP_MESSENGING_CONST } from '../App.Constants';
import { useAppState } from '../App.Core/parent-context';
import { useCURDOps } from '../App.Hooks';

const APILoadingStatusComponent = () => {
  const { CONFIG: { MESSANGING_KEY } } = APP_MESSENGING_CONST;
  const [state, dispatch] = useAppState();
  var { [MESSANGING_KEY]: { reqPayMod } } = state;
  reqPayMod = !reqPayMod ? {} : reqPayMod.getGETPayload();
  const { resp, error, spinner } = useCURDOps(reqPayMod);
  useMemo(() => {
    MESSENGING_HANDLERS.dispatchSuccessMsg(dispatch, { message: { type: 'success', message: 'RESPONSE DATA', description: 'DATA RECEIVED' } });
  }, [resp]);
  useMemo(() => {
    MESSENGING_HANDLERS.dispatchSuccessMsg(dispatch, { message: { type: 'warn', message: 'RESPONSE DATA', description: 'ERROR RECEIVED FROM THE SERVER' } });
  }, [error]);
  useMemo(() => {
    MESSENGING_HANDLERS.dispatchSuccessMsg(dispatch, { message: { type: 'info', message: 'DATA STATUS', description: 'SPINNER IS RUNNING' } });
  }, [spinner]);

  return (
    <>
    </>
  );
};
export default APILoadingStatusComponent;
