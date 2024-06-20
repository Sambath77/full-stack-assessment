import Category from '../../category/Category';
import Product from '../../products/Product';
import './home.css';

const Home = () => {
  return (
    <div>
      <div className='product'>
        <Product />
      </div>
      <div className='category'>
        <Category />
      </div>
    </div>
  );
};

export default Home;
