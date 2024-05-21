import { FiLogIn, FiShoppingCart, FiUser } from 'react-icons/fi';
import { GoSignOut } from 'react-icons/go';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';
import { useAuth } from '../../../hooks/useAuth.js';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../../firebase.js';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.js';
import { removeUser } from '../../../store/user/user.slice.js';
import { removeUserId } from '../../../store/cart/cart.slice.js';

const Nav = () => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const auth = getAuth(app);
  const { products } = useAppSelector((state) => state.cartSlice);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(removeUserId());
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <div className={styles.counter}>
            <Link to={'/cart'}>
              {' '}
              <FiShoppingCart />
            </Link>
            {products.length > 0 && <b>{products.length}</b>}
          </div>
        </li>
        <li>
          <div className={styles.counter}>
            <Link to={'/order'}>
              {' '}
              <FiUser title='주문' />
            </Link>
          </div>
        </li>
        <li>
          {isAuth ? (
            <GoSignOut
              className={styles.nav_sign_out}
              onClick={handleSignOut}
              title='로그아웃'
            />
          ) : (
            <Link to={'/login'}>
              <FiLogIn title='로그인' />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
