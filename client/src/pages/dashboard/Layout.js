import { Outlet } from 'react-router-dom';
import {BigSideBar} from '../../components/BigSideBar/BigSideBar';
import Navbar from '../../components/navbar/Navbar';
import {SmallSideBar} from '../../components/SmallSideBar/SmallSideBar';
import { Wrapper } from './Layout.styles';

const Layout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSideBar />
        <BigSideBar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default Layout;
