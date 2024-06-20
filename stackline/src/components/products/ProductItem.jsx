import ProductTag from './ProductTag';
import './product.css';

const ProductItem = ({ category }) => {
  const { title, image, subtitle, tags } = category;
  console.log(title);
  return (
    <div className='top'>
      <img src={image} alt={title} />
      <div className='body'>
        <h2 className='title'>{title}</h2>
        <p className='subtitle'>{subtitle}</p>
      </div>
      <div className='bottom'>
        {tags && tags.map((tag) => <ProductTag key={tag} tag={tag} />)}
      </div>
    </div>
  );
};

export default ProductItem;
