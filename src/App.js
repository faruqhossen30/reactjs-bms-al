import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FaRegBell, FaBars, FaPlus } from "react-icons/fa";
import Homepage from './pages/Homepage';
import './App.css';
import Dashboard from './pages/Dashboard';
import Sidebarcollapse from './components/dashboard/sidebar/Sidebarcollapse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/collapes" element={<Sidebarcollapse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
