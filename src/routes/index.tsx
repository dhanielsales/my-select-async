import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../modules/Home';
import { Catalog } from '../modules/Catalog';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
