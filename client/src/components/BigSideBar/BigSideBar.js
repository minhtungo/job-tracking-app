import { Wrapper } from './BigSideBar.styles';
import { useAppContext } from './../../context/appContext';
import Logo from '../Logo/Logo';
import NavLinks from '../nav-links/NavLinks';

export const BigSideBar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
