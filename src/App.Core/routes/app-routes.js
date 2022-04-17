import React, { Suspense } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';

const SplashLayout = React.lazy(() => import('../layouts/splash/SplashLayout'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><SplashLayout /></Suspense>} />
      <Route path="/rpro2022" element={<Suspense fallback={<div>Loading...</div>}><SplashLayout /></Suspense>} />
    </Routes>
  );
};

export default AppRoutes;
