import main from '../../assets/images/main.svg';
import Logo from '../../components/Logo/Logo';
import { Wrapper, Nav } from './Home.styles';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Wrapper>
      <Nav>
        <Logo />
      </Nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>Keeping track of your job search process</p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='main' className='img main-img' />
      </div>
    </Wrapper>
  );
};
export default Home;
