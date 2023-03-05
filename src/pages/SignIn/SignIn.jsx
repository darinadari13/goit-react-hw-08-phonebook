import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import SignForm from "components/SignForm/SignForm";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from '../../redux/userSlice/operations';
import { selectIsLoading, selectIsLoggedIn } from '../../redux/userSlice/selectors'
import Loader from "components/Loader";

export default function SignInPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if(!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);


  const handleLogin = (formData) => {
    dispatch(loginRequest(formData)).then(({ payload }) => {
      localStorage.setItem('token', payload.token)
    });
  }
  return (
    <div>
      <SignForm onSubmit={handleLogin} isLoginForm />
      {loading && <Loader/>}
    </div>
  )
}

