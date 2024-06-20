import { stacklineData } from '../../util/stacklinedata';
import ProductList from './ProductList';

const Product = () => {
  return <ProductList categories={stacklineData} />;
};

export default Product;
