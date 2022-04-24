import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import 'antd/dist/antd.css';

import AppShell from './App.Shell';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('starterPro2022');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppShell />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
