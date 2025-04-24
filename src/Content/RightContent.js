import React, { useEffect, useState } from 'react';
import ShowCard from './ShowCard/ShowCard';
import { fetchData } from './data';

function RightContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = fetchData(); // Không cần phải dùng then()
    setProducts(data);
  }, []);

  return (
    <div id="right-content">
      <h2>Product:</h2>
      <div id="products">
        {products.map((product) => (
          <ShowCard
            key={product.id}
            loai={product.loai}
            name={product.name}
            image={product.image}
          />
        ))}
        <div style={{ clear: 'both' }} />
      </div>
      <div style={{ clear: 'both' }} />
    </div>
  );
}

export default RightContent;
