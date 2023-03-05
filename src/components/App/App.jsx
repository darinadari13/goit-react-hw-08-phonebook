
import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from "react";
import {selectIsLoggedIn, selectUserInfo} from '../../redux/userSlice/selectors'
import { useDispatch, useSelector } from 'react-redux';
import {getCurrentUserRequest} from '../../redux/userSlice/operations';
import css from 'components/App/App.module.css'
import Loader from '../Loader';
import UserMenu from '../UserMenu/UserMenu';


const LazyContacts = lazy(()=> import('pages/Contacts/Contacts.jsx'));
const LazySignIn = lazy(()=> import('pages/SignIn/SignIn.jsx'));
const LazySignUp = lazy(()=> import('pages/SignUp/SignUp.jsx'))


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
    <div className={css.container}>
      <header>
        <nav className={css.nav}>
          {isLoggedIn && userData ? (
            <>
            <NavLink to='/contacts'></NavLink>
            <UserMenu userData={userData}/>
            </>
          ) : (
            <>
            <NavLink to='/login' className={css.signIn}>Sign In</NavLink>  
            <NavLink to='/register'>Sign Up</NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/contacts" element={<LazyContacts/>}/>
            <Route path="/login" element={<LazySignIn/>}/>
            <Route path="/register" element={<LazySignUp/>}/>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
