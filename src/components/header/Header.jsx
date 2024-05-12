import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Nav from './nav/Nav.jsx';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className='container'>
        <div className={styles.header_wrapper}>
          <div className={styles.header_logo}>
            <Link to={'/'}>
              <h2>Shop</h2>
            </Link>
          </div>
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Header;
