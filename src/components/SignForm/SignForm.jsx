import PropTypes from 'prop-types';
import { useRef } from 'react';
import css from 'components/SignForm/SignForm.module.css'

export default function SignForm({ onSubmit, isLoginForm = false}) {

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    if(isLoginForm) {
      const formData = {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value
      };
      onSubmit(formData);
    } else {
      const formData = {
        name: nameInputRef.current.value,
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value
      }
      onSubmit(formData);
    }

    e.target.reset();
  };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>{isLoginForm ? 'Sign In' : 'Sign up'}</h2>
        {isLoginForm ? null :
        (<label>
          <span className={css.formSpan}>Name</span>
            <input
              type="text"
              name="name"
              placeholder={'Enter your name'}
              ref={nameInputRef}
              required
            />
        </label>)}
        <label>
          <span className={css.formSpan}>E-mail</span>
            <input
              type="email"
              name="email"
              placeholder={'Enter your e-mail'}
              ref={emailInputRef}
              required
            />
        </label>
        <label>
          <span className={css.formSpan}>Password</span>
            <input
              type="password"
              name="password"
              minLength={7}
              placeholder={'Enter your password'}
              ref={passwordInputRef}
              required
            />
        </label>
        <button className={css.formBtn} type="submit">
          {isLoginForm ? 'Sign In' : 'Sign up'}
        </button>
      </form>
    );
  }

SignForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};