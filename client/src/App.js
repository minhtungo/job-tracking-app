import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/authenticate/Authenticate';
import Error from './pages/error/Error';
import Stats from './pages/dashboard/Stats';
import Profile from './pages/dashboard/Profile';
import AddJob from './pages/dashboard/AddJob';
import AllJobs from './pages/dashboard/AllJobs';
import Layout from './pages/dashboard/Layout';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='/all-jobs' element={<AllJobs />} />
          <Route path='/add-job' element={<AddJob />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
