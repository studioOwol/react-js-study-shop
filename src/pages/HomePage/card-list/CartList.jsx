import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.js';
import styles from './CardList.module.scss';
import { fetchProducts } from '../../../store/products/products.slice.js';
import CardItem from './card-item/CardItem.jsx';

const CartList = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.productsSlice);

  useEffect(() => {
    dispatch(fetchProducts(styles));
  }, []);

  return (
    <ul className={styles.card_list}>
      {products.map((product) => (
        <CardItem key={product.id} />
      ))}
    </ul>
  );
};

export default CartList;