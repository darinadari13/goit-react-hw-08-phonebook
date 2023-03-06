
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/userSlice/selectors';
import { setIsLoggedIn } from 'redux/userSlice/userSlice';
import { getCurrentUserRequest } from '../redux/userSlice/operations';

function WithAuthRedirect(Component, navigateTo) {
  const ComponentWithRedirect = props => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);

    useEffect(() => {
      if (!localStorage.getItem('token')) {
        dispatch(setIsLoggedIn(false))
        return
      }
  
      dispatch(getCurrentUserRequest())
    }, [dispatch])

    if (isLoggedIn === false) {
      return <Navigate to={navigateTo} />
    }

    if (isLoggedIn === true) {
      return <Component {...props} />
    }
  
    
    return <div>Loading user...</div>;
  };

  return ComponentWithRedirect;
}

export default WithAuthRedirect;