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
import BetPanel from './pages/admin/bet/BetPanel';
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
import Widthdraw from './pages/admin/Widthdraw';
import WidthdrawForm from './pages/user/WidthdrawForm';
import BetCreate from './pages/admin/bet/BetCreate';
import BetQuestionCreate from './pages/admin/bet/BetQuestionCreate';
import UserList from './pages/admin/user/UserList';
import UserDetails from './pages/admin/user/UserDetails';
import UserEdit from './pages/admin/user/UserEdit';
import ClubList from './pages/admin/club/ClubList';
import ClubCreate from './pages/admin/club/ClubCreate';
import ClubEdit from './pages/admin/club/ClubEdit';

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
            <Route path="/widthdraw" element={<WidthdrawForm />} />
          </Route>
        </Routes>

        {/* Dashboard */}
        <Routes>
          <Route element={<AdminAuth />}>
            <Route path='admin/dashboard' element={<Dashboard />} />
            <Route path='admin/balance' element={<Balance />} />
            {/* Bet */}
            <Route path='admin/bet-panel' element={<BetPanel />} />
            <Route path='admin/bet/create' element={<BetCreate />} />
            <Route path='admin/bet/qusetion/create' element={<BetQuestionCreate />} />
            {/* User */}
            <Route path='admin/users' element={<UserList />} />
            <Route path='admin/user/:id' element={<UserDetails />} />
            <Route path='admin/user/edit/:id' element={<UserEdit />} />
            {/* Club */}
            <Route path='admin/clubs' element={<ClubList />} />
            <Route path='admin/club/create' element={<ClubCreate />} />
            <Route path='admin/club/edit/:id' element={<ClubEdit />} />

            <Route path='admin/deposits' element={<Deposit />} />
            <Route path='admin/deposit/:id' element={<DepositConfirm />} />
            <Route path='admin/widthdraws' element={<Widthdraw />} />
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
