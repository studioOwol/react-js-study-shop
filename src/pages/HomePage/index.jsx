import CartList from './card-list/CartList.jsx';
import CountProducts from './count-products/CountProducts.jsx';
import FiltersCategory from './filter-category/FiltersCategory.jsx';

const HomePage = () => {
  return (
    <div className='page'>
      <div className='container'>
        <h1>Products</h1>
        <FiltersCategory />
        <CountProducts />
        <CartList />
      </div>
    </div>
  );
};

export default HomePage;
