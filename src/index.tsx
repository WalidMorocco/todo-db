import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import {Todos} from '../src/components/Todos';
import RouteNotFound from './components/RouteNotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={<Todos />}
          />
          <Route path="*" element={<RouteNotFound />} />
          <Route path="todos" element={<Todos />} />
          {/* <Route path="todos/:todoId" element={<TodoDetails />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
