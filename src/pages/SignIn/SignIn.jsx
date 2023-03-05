import React from "react";
import { useNavigate } from "react-router-dom";
import SignForm from "components/SignForm/SignForm";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from '../../redux/userSlice/operations';
import { selectIsLoading } from '../../redux/userSlice/selectors'
import Loader from "components/Loader";

export default function SignInPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    dispatch(loginRequest(formData)).then(({ payload }) => {
      localStorage.setItem('token', payload.token)
      navigate('/contacts');
    });
  }
  return (
    <div>
      <SignForm onSubmit={handleLogin} isLoginForm />
      {loading && <Loader/>}
    </div>
  )
}

