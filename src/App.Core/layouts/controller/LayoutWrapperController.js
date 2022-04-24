import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout, { Footer, Header } from 'antd/lib/layout/layout';
import { useMediaQuery } from 'react-responsive';
import { MESSENGING_HANDLERS } from '../../../App.Actions';
import { APP_ACTIVE_PAGE_ACTIONS } from '../../../App.Actions/actions/messanging.actions';
import { APP_ACTIVE_PAGE_CONST, APP_DEVICE_LAYOUT_CONST } from '../../../App.Constants';
import { useAppState } from '../../parent-context';
import { useCURDOps } from '../../../App.Hooks';
import RequestPayloadModel from '../../../App.Models/request.payload';
import APILoadingStatusComponent from '../../../App.Shared.Components/App.Loading.Status.Component';
import '../../../App.Assets/css-scss/body.scss';

const LayoutWrapperController = ({ pageApi, children }) => {
  const [state, dispatch] = useAppState();
  const { activePage: { refresh, apiUrl } } = state;
  const [isMobile, setIsmobile] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  const [isPageApi, setIsPageApi] = useState(pageApi);
  const requestPayloadModel = RequestPayloadModel();
  requestPayloadModel.url = apiUrl?.urlString;
  const {
    resp,
    error,
    spinner,
    isRan
  } = useCURDOps(requestPayloadModel.getGETPayload());

  useEffect(() => {
    setIsmobile(isTabletOrMobile);
    MESSENGING_HANDLERS.dispatchDeviceResolution(dispatch, { deviceRes: { type: APP_DEVICE_LAYOUT_CONST.MSG.ISMOBILE, isTabletOrMobile, description: 'DATA RECEIVED' } });
    MESSENGING_HANDLERS.setAppActivePageAPIDispatch(
      dispatch,
      {
        apiUrl: {
          type: APP_ACTIVE_PAGE_CONST.MSG.SETAPIURL,
          urlString: '/posts',
          refresh: true,
          description: 'DATA RECEIVED'
        }
      }
    );
  }, []);
  useEffect(() => {
    if (isPageApi && refresh) {
      MESSENGING_HANDLERS.setAppActivePageAPIDispatch(
        dispatch,
        {
          apiUrl: {
            type: APP_ACTIVE_PAGE_CONST.MSG.SETAPIURL,
            urlString: '/posts',
            refresh: true,
            description: 'DATA RECEIVED'
          }
        }
      );
      MESSENGING_HANDLERS.dispatchIsRefresh(
        dispatch,
        {
          apiUrl: {
            type: APP_ACTIVE_PAGE_CONST.MSG.ISREFRESH,
            urlString: '/posts',
            refresh: false,
            description: 'DATA RECEIVED'
          }
        }
      );
      setIsPageApi(false);
    }
  }, [isPageApi]);

  useEffect(() => {
    if (resp && resp.length) {
      MESSENGING_HANDLERS.setAppActivePageDataDispatch(
        dispatch,
        {
          apiUrl: {
            type: APP_ACTIVE_PAGE_CONST.MSG.SETACTIVEPAGEDATA,
            urlString: '',
            refresh: false,
            description: 'SET DATA TO ACTIVE PAGE'
          },
          data: resp,
        }
      );
    }
  }, [resp]);

  return (
    <Layout id="App-Layout-Container">
      <APILoadingStatusComponent error={error} resp={resp} spinner={spinner} isRan={isRan} />
      <Header>
        <Link to="/" state={{ fromDashboard: true }}>
          Go back to home
        </Link>
      </Header>
      {children}
      <Footer>This is footer</Footer>
    </Layout>
  );
};
export default LayoutWrapperController;
