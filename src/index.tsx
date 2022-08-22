import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './pages/HomePage';
import RouteNotFound from './pages/RouteNotFound';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<RouteNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);


