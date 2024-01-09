import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { login } from '../../redux/auth/operations';
import { Navigate } from 'react-router-dom';
import '../RegisterForm/RegisterForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(
      login({
        email,
        password,
      })
    );
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="loginEmail">Email</label>
        <input name="email" id="loginEmail" type="email" />
        <label htmlFor="loginPassword">Password</label>
        <input
          name="password"
          id="loginPassword"
          type="password"
          autoComplete="off"
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
