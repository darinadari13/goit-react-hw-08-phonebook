import React from "react";
import PropTypes from 'prop-types';
import { logOutRequest} from '../../redux/userSlice/operations';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import css from '../UserMenu/UserMenu.module.css'

export default function UserMenu({ userData }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogOut = () => {
    dispatch(logOutRequest()).then(() => {
      localStorage.removeItem('token');
      navigate('/');
    });
  }
  return (
    <div>
      <p>{userData.email}</p>
      <button className={css.btn} onClick={handleLogOut}>Logout</button>
    </div>
  )   
}

UserMenu.propTypes = {
  userData: PropTypes.object.isRequired,
};