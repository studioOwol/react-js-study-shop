import { FiLogIn, FiShoppingCart, FiUser } from 'react-icons/fi';
import { GoSignOut } from 'react-icons/go';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <div className={styles.counter}>
            <Link to={'/cart'}>
              {' '}
              <FiShoppingCart />
            </Link>
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
          <GoSignOut className={styles.nav_sign_out} title='로그아웃' />
          <Link to={'/login'}>
            <FiLogIn title='로그인' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
