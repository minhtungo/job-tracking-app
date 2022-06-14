import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.main`
  text-align: center;
  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  margin-bottom: 0.5rem;
`;

export const Content = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--grey-500);
`;

export const StyledLink = styled(Link)`
  color: var(--primary-500);
  text-decoration: underline;
  text-transform: capitalize;
`;
