import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={token ? <Navigate to="/dashboard" /> : <Login setToken={setToken} />}
        />
        <Route
          path="/signup"
          element={token ? <Navigate to="/dashboard" /> : <Signup setToken={setToken} />}
        />
        <Route
          path="/dashboard"
          element={token ? <Dashboard token={token} setToken={setToken} /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to={token ? '/dashboard' : '/login'} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;