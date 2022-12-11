import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FaRegBell, FaBars, FaPlus } from "react-icons/fa";
import Homepage from './pages/Homepage';
import './App.css';
import Dashboard from './pages/admin/Dashboard';
import Sidebarcollapse from './components/dashboard/sidebar/Sidebarcollapse';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardRoute from './routes/DashboardRoute';
import DashboardLayout from './components/layouts/DashboardLayout';
import Balance from './pages/admin/Balance';
import PageNotFound from './components/PageNotFound';
import BetPanel from './pages/admin/BetPanel';
import Settings from './pages/admin/Settings';

function App() {
  return (
    <BrowserRouter>

      {/* Frontend routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* Dashboard */}
      <Routes>
        <Route path='admin/dashboard' element={<Dashboard />} />
        <Route path='admin/balance' element={<Balance />} />
        <Route path='admin/bet-panel' element={<BetPanel />} />
        <Route path='admin/settings' element={<Settings />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
