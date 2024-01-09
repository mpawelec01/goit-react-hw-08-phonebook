import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUserName } from '../../redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  return (
    <div>
      <p>Welcome, {userName}</p>
      <button onClick={() => dispatch(logout())}>Log Out</button>
    </div>
  );
};
