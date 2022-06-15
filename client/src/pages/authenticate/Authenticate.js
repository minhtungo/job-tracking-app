import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Alert from '../../components/alert/Alert';
import FormRow from '../../components/form-row/FormRow';
import Logo from '../../components/Logo/Logo';

import { Wrapper, Title } from './Authenticate.styles';
import { useAppContext } from '../../context/appContext';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const {
    user,
    isLoading,
    showAlert,
    displayAlert,
    registerUser,
    loginUser,
    authenticateUser,
  } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      authenticateUser({
        currentUser,
        endPoint: 'login',
        alertText: 'Success! Redirecting...',
      });
    } else {
      authenticateUser({
        currentUser,
        endPoint: 'register',
        alertText: 'Success! Redirecting...',
      });
    }

    console.log(values);
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <Logo />
        <Title>{values.isMember ? 'Login' : 'Register'}</Title>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}

        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
