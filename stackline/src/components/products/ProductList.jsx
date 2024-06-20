import ProductItem from './ProductItem';

const ProductList = ({ categories }) => {
  return (
    <div>
      {categories &&
        categories.map((category) => (
          <ProductItem key={category.id} category={category} />
        ))}
    </div>
  );
};

export default ProductList;
