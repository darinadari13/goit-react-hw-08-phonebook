import React, { useEffect } from "react";
import SignForm from "components/SignForm/SignForm";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from '../../redux/userSlice/operations';
import { selectIsLoading, selectIsLoggedIn } from '../../redux/userSlice/selectors'
import Loader from "components/Loader";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    if(!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);


  const handleRegister = formData => {
    dispatch(registerRequest(formData)).then(({ payload }) => {
      localStorage.setItem('token', payload.token)
    });;
  }
  return (
    <div>
      <SignForm onSubmit={handleRegister} />
      {loading && <Loader/>}
    </div>
  )
}