
import img from '../../assets/images/not-found.svg';
import { Wrapper, Title, Content, StyledLink } from './Error.styles';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <Title>Opps! Page Not Found</Title>
        <Content>We can't seem to find the page you're looking for</Content>
        <StyledLink to='/'>Home</StyledLink>
      </div>
    </Wrapper>
  );
};
export default Error;
