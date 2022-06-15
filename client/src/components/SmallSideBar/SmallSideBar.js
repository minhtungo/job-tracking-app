import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { useAppContext } from '../../context/appContext';
import Logo from '../Logo/Logo';

import { Wrapper } from './SmallSideBar.styles';
import links from './../../utils/links';
import NavLinks from '../nav-links/NavLinks';

export const SmallSideBar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};
