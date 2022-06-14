import logo from '../../assets/images/logo.svg';
import main from '../../assets/images/main.svg';
import { Wrapper, Nav } from './Home.styles';

const Home = () => {
  return (
    <Wrapper>
      <Nav>
        <img src={logo} alt='logo' className='logo' />
      </Nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>Keeping track of your job search process</p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='main' className='img main-img' />
      </div>
    </Wrapper>
  );
};
export default Home;
