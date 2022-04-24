/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { MESSENGING_HANDLERS } from '../App.Actions';
import { APP_MESSENGING_CONST } from '../App.Constants';
import { useAppState } from '../App.Core/parent-context';

const APILoadingStatusComponent = (
  {
    error,
    resp,
    spinner,
    isRan
  }
) => {
  const [state, dispatch] = useAppState();
  const { CONFIG: { MESSANGING_KEY } } = APP_MESSENGING_CONST;
  const { activePage: { apiUrl } } = state;
  var isExecuted = false;
  useEffect(() => {
    isExecuted = isRan && resp && resp.length && MESSENGING_HANDLERS.dispatchSuccessMsg(dispatch, { message: { type: 'success', message: 'RESPONSE DATA', description: 'DATA RECEIVED' } });
  }, [resp]);
  useEffect(() => {
    isExecuted = isRan && error && MESSENGING_HANDLERS.dispatchSuccessMsg(dispatch, { message: { type: 'warn', message: 'RESPONSE DATA', description: 'ERROR RECEIVED FROM THE SERVER' } });
  }, [error]);
  useEffect(() => {
    isExecuted = spinner && MESSENGING_HANDLERS.dispatchSuccessMsg(dispatch, { message: { type: 'info', message: 'DATA STATUS', description: 'SPINNER IS RUNNING' } });
  }, [spinner]);

  return (
    <>
    </>
  );
};
export default APILoadingStatusComponent;
