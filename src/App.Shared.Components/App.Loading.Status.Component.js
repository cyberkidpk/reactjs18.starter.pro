/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { MESSENGING_HANDLERS } from '../App.Actions';
import { APP_MESSENGING_CONST } from '../App.Constants';
import { useAppState } from '../App.Core/parent-context';
import { useCURDOps } from '../App.Hooks';
import RequestPayloadModel from '../App.Models/request.payload';

const APILoadingStatusComponent = () => {
  const { CONFIG: { MESSANGING_KEY } } = APP_MESSENGING_CONST;
  const [state, dispatch] = useAppState();
  const { activePage: { apiUrl = '' } } = state;
  var isExecuted = false;
  const requestPayloadModel = RequestPayloadModel();
  requestPayloadModel.url = apiUrl;
  const {
    resp,
    error,
    spinner,
    isRan
  } = useCURDOps(requestPayloadModel.getGETPayload());
  useEffect(() => {
    isExecuted = isRan && apiUrl && MESSENGING_HANDLERS.dispatchSuccessMsg(dispatch, { message: { type: 'success', message: 'RESPONSE DATA', description: 'DATA RECEIVED' } });
  }, [resp]);
  useEffect(() => {
    isExecuted = isRan && apiUrl && MESSENGING_HANDLERS.dispatchSuccessMsg(dispatch, { message: { type: 'warn', message: 'RESPONSE DATA', description: 'ERROR RECEIVED FROM THE SERVER' } });
  }, [error]);
  useEffect(() => {
    isExecuted = isRan && apiUrl && MESSENGING_HANDLERS.dispatchSuccessMsg(dispatch, { message: { type: 'info', message: 'DATA STATUS', description: 'SPINNER IS RUNNING' } });
  }, [spinner]);

  return (
    <>
    </>
  );
};
export default APILoadingStatusComponent;
