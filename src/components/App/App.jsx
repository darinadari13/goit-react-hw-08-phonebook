
import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from "react";
import {selectIsLoggedIn, selectUserInfo} from '../../redux/userSlice/selectors'
import { useSelector } from 'react-redux';
import css from 'components/App/App.module.css'
import Loader from '../Loader';
import UserMenu from '../UserMenu/UserMenu';


const LazyContacts = lazy(()=> import('pages/Contacts/Contacts.jsx'));
const LazySignIn = lazy(()=> import('pages/SignIn/SignIn.jsx'));
const LazySignUp = lazy(()=> import('pages/SignUp/SignUp.jsx'))
const LazyHomePage = lazy(() => import('pages/Home/Home.jsx'))

export default function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserInfo);

  return (
    <div className={css.container}>
      <header>
        <nav className={css.nav}>
          {isLoggedIn && userData ? (
            <>
            <NavLink to='/'></NavLink>
            <NavLink to='/contacts'></NavLink>
            <UserMenu userData={userData}/>
            </>
          ) : (
            <>
            <NavLink to='/' className={css.home}>Home</NavLink>
            <NavLink to='/login' className={css.signIn}>Sign In</NavLink>  
            <NavLink to='/register' className={css.signUp}>Sign Up</NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<LazyHomePage/>}/>
            <Route path="/contacts" element={<LazyContacts/>}/>
            <Route path="/login" element={<LazySignIn/>}/>
            <Route path="/register" element={<LazySignUp/>}/>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
