import './category.css';

const CategoryCard = ({ category }) => {
  const { sales } = category;
  console.log(sales);
  return (
    <div className='sale'>
      <table id='category'>
        <thead>
          <tr>
            <th>WEEKENDING</th>
            <th>RETAIL SLES</th>
            <th>WHOLESALE SALES</th>
            <th>UNITS SOLD</th>
            <th>RETAILER MARGIN</th>
          </tr>
        </thead>
        <tbody>
          {sales &&
            sales.map((sale) => (
              <tr>
                <td>{sale.weekEnding}</td>
                <td>{sale.retailSales}</td>
                <td>{sale.wholesaleSales}</td>
                <td>{sale.unitsSold}</td>
                <td>${sale.retailerMargin}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryCard;
