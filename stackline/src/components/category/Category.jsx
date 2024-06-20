import { stacklineData } from '../../util/stacklinedata';
import CategoryTable from './CategoryTable';

const Category = () => {
  console.log(stacklineData);
  return <CategoryTable categories={stacklineData} />;
};

export default Category;
