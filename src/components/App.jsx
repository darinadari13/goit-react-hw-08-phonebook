// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import {selectIsLoggedIn, selectUserInfo} from '../redux/userSlice/selectors'
import { useDispatch, useSelector } from 'react-redux';
// import Filter from './Filter/Filter';
import {getCurrentUserRequest, logOutRequest} from '../redux/userSlice/operations';
import Loader from './Loader';
import SignInPage from 'pages/SignIn/SignIn';
import SignUpPage from 'pages/SignUp/SignUp';
import ContactsPage from 'pages/Contacts/Contacts';
import UserMenu from './UserMenu/UserMenu';



export default function App() {
  
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserInfo);


  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return
    }

    dispatch(getCurrentUserRequest())
  }, [dispatch])


  return (
    <div>
      <header>
        <nav>
          {isLoggedIn ? (
            <>
            <NavLink to='/contacts'>Contacts</NavLink>
            <UserMenu userData={userData}/>
            </>
          ) : (
            <>
            <NavLink to='/login'>Sign In</NavLink>  
            <NavLink to='/register'>Sign Up</NavLink>
            </>
          )}
        </nav>
      </header>

      <main>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/contacts" element={<ContactsPage/>}/>
            <Route path="/login" element={<SignInPage/>}/>
            <Route path="/register" element={<SignUpPage/>}/>
          </Routes>
        </Suspense>
      </main>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <span>'No contacts'</span>
      )}
      {loading && <Loader/>} */}
    </div>
  );
}
