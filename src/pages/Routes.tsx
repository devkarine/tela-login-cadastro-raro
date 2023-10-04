import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';

export const Rota = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigate to="/login" />} path="/" />
        <Route Component={Login} path="/login" />
        <Route Component={Register} path="/register" />
      </Routes>
    </BrowserRouter>
  );
};
