import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';
import { Post } from '../util/axios';
import { Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [error, setError] = React.useState(null);

  const [userData, setUserData] = React.useState({
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(userData);

      const response = await Post('users/register/', {
        email: userData.email,
        username: userData.username,
        password: userData.password
      });

      console.log(response.data);

      navigate('/');
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className='form'>
      <FaUserAlt className='user-icon' />
      <h2>Sign Up</h2>
      <form>
        <div className='mb-3 mt-3 row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            name='email'
            value={userData.email}
            onChange={handleChange}
            className='form-control col-10'
            id='email'
            placeholder='Email'
          />
          {error ? (
            <span className='error text-danger font-weight-bold mt-3'>
              {error.email_error}
            </span>
          ) : (
            ''
          )}
        </div>

        <div className='mb-3 row'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            type='text'
            name='username'
            value={userData.username}
            onChange={handleChange}
            className='form-control col-10'
            id='username'
            placeholder='Username'
          />

          {error ? (
            <span className='error text-danger font-weight-bold mt-3'>
              {error.username_error}
            </span>
          ) : (
            ''
          )}
        </div>
        <div className='mb-3 row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            value={userData.password}
            onChange={handleChange}
            className='form-control col-10'
            id='password'
            placeholder='Password'
          />
        </div>
        <div className='mb-3 row'>
          <button
            id='submit'
            type='submit'
            className='btn btn-primary'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className='mb-3 row'>
          <small>
            Already have an account? <Link to='/login'> register </Link>
          </small>
        </div>
      </form>
    </div>
  );
}

export default Register;
