import React, { useEffect } from 'react';
import { Card } from 'antd';
import Layout from 'antd/lib/layout/layout';
import { useAppState } from '../../parent-context';
// xs sm md lg xl

const PrimaryLayout = () => {
  const [state, dispatch] = useAppState();
  const gridStyle = {
    width: state.deviceAndLayout?.deviceRes?.isTabletOrMobile ? '100%' : '25%',
    textAlign: 'center',
    borderRadius: '6px',
  };

  return (
    <Layout>
      <Card title="Card Title">
        <Card.Grid sm={24} style={gridStyle}>Content</Card.Grid>
        <Card.Grid sm={24} hoverable={false} style={gridStyle}>Content</Card.Grid>
        <Card.Grid sm={24} style={gridStyle}>Content</Card.Grid>
        <Card.Grid sm={24} style={gridStyle}>Content</Card.Grid>
        <Card.Grid sm={24} style={gridStyle}>Content</Card.Grid>
        <Card.Grid sm={24} style={gridStyle}>Content</Card.Grid>
        <Card.Grid sm={24} style={gridStyle}>Content</Card.Grid>
      </Card>
    </Layout>
  );
};

export default PrimaryLayout;
