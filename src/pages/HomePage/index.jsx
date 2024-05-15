import FiltersCategory from './filter-category/FiltersCategory.jsx';

const HomePage = () => {
  return (
    <div className='page'>
      <div className='container'>
        <h1>Products</h1>
        <FiltersCategory />
      </div>
    </div>
  );
};

export default HomePage;
