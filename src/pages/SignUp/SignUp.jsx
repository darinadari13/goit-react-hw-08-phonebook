import React from "react";
import SignForm from "components/SignForm/SignForm";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from '../../redux/userSlice/operations';
import { selectIsLoading } from '../../redux/userSlice/selectors'
import Loader from "components/Loader";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectIsLoading);


  const handleRegister = formData => {
    dispatch(registerRequest(formData)).then(({ payload }) => {
      localStorage.setItem('token', payload.token)
      navigate('/contacts');
    });;
  }
  return (
    <div>
      <SignForm onSubmit={handleRegister} />
      {loading && <Loader/>}
    </div>
  )
}