import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.js';
import { getTotalPrice, postOrder } from '../../../store/cart/cart.slice.js';
import styles from './Checkout.module.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth.js';

const Checkout = () => {
  const cart = useAppSelector((state) => state.cartSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotalPrice());
  }, []);

  const { isAuth } = useAuth();

  const sendOrder = () => {
    dispatch(postOrder(cart));
  };

  return (
    <div className={styles.checkout}>
      <div>
        <p>
          {' '}
          <span>합계: </span> $ {cart.totalPrice.toFixed(2)}
        </p>
        {isAuth ? (
          <button
            className={styles.checkout_button}
            onClick={() => sendOrder()}
          >
            계산하기
          </button>
        ) : (
          <Link className={styles.checkout_button} to='/login'>
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};

export default Checkout;
