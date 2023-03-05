// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from "react";
import {selectIsLoggedIn, selectUserData} from '../redux/userSlice/selectors'
import { useDispatch, useSelector } from 'react-redux';
// import Filter from './Filter/Filter';
import {logOutRequest} from '../redux/userSlice/operations';
import Loader from './Loader';
import SignInPage from 'pages/SignIn/SignIn';
import SignUpPage from 'pages/SignUp/SignUp';
import ContactsPage from 'pages/Contacts/Contacts';
import HomePage from 'pages/Home/Home';

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logOutRequest()).then(() => {
      localStorage.removeItem('token');
    });
  }
    return (
      <div>
        <header>
          <nav>
            {isLoggedIn ? (
              <>
              {/* <NavLink to='/'>Home</NavLink> */}
              <NavLink to='/contacts'>Contacts</NavLink>
              <span>Hello, {userData.user.name}</span>
              <button onClick={handleLogOut}>Logout</button>
              </>
            ) : (
              <>
              {/* <NavLink to='/'>Home</NavLink> */}
              <NavLink to='/sign-in'>Sign In</NavLink>  
              <NavLink to='/sign-up'>Sign Up</NavLink>
              </>
            )}
          </nav>
        </header>

        <main>
          <Suspense fallback={<Loader/>}>
            <Routes>
              {/* <Route path="/" element={<HomePage/>} /> */}
              <Route path="/contacts" element={<ContactsPage/>}/>
              <Route path="/sign-in" element={<SignInPage/>}/>
              <Route path="/sign-up" element={<SignUpPage/>}/>
              <Route path="*" element={<Navigate to="/contacts"/>} />
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
