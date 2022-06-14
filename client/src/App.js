import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Error from './pages/error/Error';
import DashBoard from './pages/dashboard/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
