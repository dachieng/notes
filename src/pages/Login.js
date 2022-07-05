import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import axiosInstance from '../AxiosInstance';
import { useNavigate } from 'react-router-dom';
import { Post } from '../util/axios';

function Login() {
  const navigate = useNavigate();

  const [userData, setUserData] = React.useState({
    email: '',
    password: ''
  });

  const [error, setError] = React.useState(null);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);

    let handleLogin = async () => {
      try {
        let response = await Post('token/access/', {
          email: userData.email,
          password: userData.password
        });
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        axiosInstance.defaults.headers['Authorization'] =
          'Bearer ' + localStorage.getItem('access_token');
        navigate('/');
      } catch (err) {
        setError(err.response.data.detail);
      }
    };
    handleLogin();
  };

  return (
    <div className='form'>
      <FaUserAlt className='user-icon' />
      <h2>Sign In</h2>
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
        {error ? (
          <div className='error text-danger font-weight-bold mb-3'>{error}</div>
        ) : (
          ''
        )}
        <div className='mb-3 row'>
          <button
            id='submit'
            type='submit'
            onClick={handleSubmit}
            className='btn btn-primary'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
