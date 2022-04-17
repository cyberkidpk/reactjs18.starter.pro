import React from 'react';
import { Spin } from 'antd';

const spinContainerStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  background: 'transparent',
  top: 0,
  left: 0,
  flex: 1,
  zIndex: 1000,

};

const AppSpinnerComponent = () => {
  return (
    <div
      style={
        spinContainerStyle
        }>
      <Spin size="large" />
    </div>
  );
};
export default AppSpinnerComponent;
