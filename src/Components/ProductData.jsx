import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        console.log("Response:", response);
        const data = await response.json();
        setProducts(data.products); 
        console.log("Products:", data);
        console.log("Fetched products:", data.products);
        console.log("Fetched products1:", data.products[0].reviews);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, 
  []);

  return (
    <div style={{ padding: '20px' , }}>
      <h2>Product List</h2>
      <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif',}}>
        <thead style={{ backgroundColor: '#4e1bb5' , color: 'white' , fontWeight: 'bold',textAlign:'center'}}>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: '#ffffff', color: 'black', fontSize: '14px', textAlign: 'center' }}>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>{product.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
