import React from 'react';
import styles from './CardItem.module.scss';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux.js';
import { addToCart } from '../../../../store/cart/cart.slice.js';

const CardItem = ({ item }) => {
  const { products } = useAppSelector((state) => state.cartSlice);
  // 카트 안에 들어 있는 product 중 하나라도 있으면 클릭 못하도록
  const productMatching = products.some((product) => product.id === item.id);

  const dispatch = useAppDispatch();
  const addItemToCart = () => {
    dispatch(addToCart(item));
  };
  return (
    <li className={styles.card_item}>
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          width={'80%'}
          height={'200px'}
          alt='product card'
        />
      </Link>

      <h5>{item.title.substring(0, 15)}...</h5>

      <div>
        <button
          disabled={productMatching}
          onClick={() => !productMatching && addItemToCart()}
        >
          {productMatching ? '장바구니에 담긴 제품' : '장바구니에 담기'}
        </button>
        <p>$ {item.price}</p>
      </div>
    </li>
  );
};

export default CardItem;
