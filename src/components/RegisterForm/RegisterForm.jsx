import { useDispatch, useSelector } from 'react-redux';
import '../RegisterForm/RegisterForm.module.css';
import { register } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleRegistration = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(
      register({
        name,
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
      <form onSubmit={handleRegistration}>
        <label htmlFor="registrationName">Username</label>
        <input name="username" id="registrationName" />
        <label htmlFor="registrationEmail">Email</label>
        <input name="email" type="email" id="registrationEmail" />
        <label htmlFor="registrationPassword">Password</label>
        <input
          name="password"
          type="password"
          autoComplete="off"
          id="registrationPassword"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
