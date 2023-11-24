import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import PaginaInicial from './componentes/PaginaInicial';
import PaginaLogin from './componentes/PaginaLogin';


function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/inicio" element={<PaginaInicial />} exact />
        <Route path="/" element={<PaginaLogin />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;