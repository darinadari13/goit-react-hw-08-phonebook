import React from "react";
import PropTypes from 'prop-types';
import { logOutRequest} from '../../redux/userSlice/operations';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

export default function UserMenu({ userData }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogOut = () => {
    dispatch(logOutRequest()).then(() => {
      localStorage.removeItem('token');
      navigate('/login');
    });
  }
  return (
    <div>
      <p>{userData.email}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  )   
}

UserMenu.propTypes = {
  userData: PropTypes.object.isRequired,
};