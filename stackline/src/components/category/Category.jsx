import { stacklineData } from '../../util/stacklinedata';
import CategoryTable from './CategoryTable';

const Category = () => {
  return <CategoryTable categories={stacklineData} />;
};

export default Category;
