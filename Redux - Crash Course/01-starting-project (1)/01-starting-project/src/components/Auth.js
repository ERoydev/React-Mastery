import classes from './Auth.module.css';
import { authActions } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';

const initialFormValues = {
  email: '',
  password: ''
};

const Auth = () => {
  // Controlled Form for practice
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');

  const onChangeHandler = (e) => {
    setFormValues(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const dispatch = useDispatch();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const loginHandler = (e) => {
    e.preventDefault();

    if (formValues.email.length < 6 || formValues.password.length < 6) {
      setError('Email and password must be longer than 6 characters!')
    } else {
      dispatch(authActions.login());
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input 
              type='email' 
              id='email' 
              name='email'
              defaultValue={formValues.email}
              onChange={onChangeHandler}
            />

          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input 
              type='password' 
              id='password' 
              name='password'
              defaultValue={formValues.password}
              onChange={onChangeHandler}
            />

          </div>
          {error && <p>{error}</p>}
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
