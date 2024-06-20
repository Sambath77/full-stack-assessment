import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryTable = ({ categories }) => {
  return (
    <div>
      {categories &&
        categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
    </div>
  );
};

export default CategoryTable;
