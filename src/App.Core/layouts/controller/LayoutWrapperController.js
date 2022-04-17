import { Footer, Header } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MESSENGING_HANDLERS } from '../../../App.Actions';
import { APP_DEVICE_LAYOUT_CONST } from '../../../App.Constants';
import { useAppState } from '../../parent-context';

const LayoutWrapperController = ({ children }) => {
  const [state, dispatch] = useAppState();
  const [isMobile, setIsmobile] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  useEffect(() => {
    setIsmobile(isTabletOrMobile);
    MESSENGING_HANDLERS.dispatchDeviceResolution(dispatch, { deviceRes: { type: APP_DEVICE_LAYOUT_CONST.MSG.ISMOBILE, isTabletOrMobile, description: 'DATA RECEIVED' } });
  }, []);

  return (
    <>
      <Header>This is header</Header>
      {children}
      <Footer>This is footer</Footer>
    </>
  );
};
export default LayoutWrapperController;
