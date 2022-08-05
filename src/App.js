import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
