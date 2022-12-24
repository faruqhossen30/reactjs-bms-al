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
import Flag from './pages/admin/Flag';
import AuthContext from './contexts/authContext';
import setAuthToken from './util/setAuthToken';
import jwtDecode from 'jwt-decode';
import Game from './pages/admin/Game';
import AdminAuth from './routes/AdminAuth';
import UserAuth from './routes/UserAuth';
import Profile from './pages/user/Profile';
import DepositForm from './pages/user/DepositForm';
import Deposit from './pages/admin/Deposit';
import DepositConfirm from './components/dashboard/deposit/DepositConfirm';

let user;
if (localStorage.token) {
  const jwt = localStorage.getItem("token");
  setAuthToken(jwt);
  user = jwtDecode(jwt).user;
}


function App() {
  console.log(user);
  return (
    <AuthContext.Provider value={user}>
      <BrowserRouter>

        {/* Frontend routes */}
        <Routes>
          {/* <Route path="*" element={<PageNotFound />} /> */}
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route element={<UserAuth />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/deposit" element={<DepositForm />} />
          </Route>
        </Routes>

        {/* Dashboard */}
        <Routes>
          <Route element={<AdminAuth />}>
            <Route path='admin/dashboard' element={<Dashboard />} />
            <Route path='admin/balance' element={<Balance />} />
            <Route path='admin/bet-panel' element={<BetPanel />} />
            <Route path='admin/deposits' element={<Deposit />} />
            <Route path='admin/deposit/:id' element={<DepositConfirm />} />
            <Route path='admin/settings' element={<Settings />} />
            <Route path='admin/flats' element={<Flag />} />
            <Route path='admin/games' element={<Game />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
