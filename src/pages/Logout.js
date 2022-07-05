import React from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../AxiosInstance';
import { Post } from '../util/axios';

function Logout() {
  let navigate = useNavigate();

  React.useEffect(() => {
    let handleLogout = async () => {
      try {
        let response = await Post('users/logout/', {
          refresh_token: localStorage.getItem('refresh_token')
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        navigate('/login');
      } catch (err) {
        console.log(err.message);
      }
    };
    handleLogout();
  }, []);

  return <></>;
}

export default Logout;
