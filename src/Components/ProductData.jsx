import React, { useState, useEffect } from 'react';
import { Pagination, TextField, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './Product.css'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchBox, setSearchBox] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=194');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearchBox(e.target.value);
    setCurrentPage(1);
  };

  const filteredProducts = products.filter(product =>
    product.stock.toString().includes(searchBox) ||
    product.rating.toString().includes(searchBox) ||
    product.price.toString().includes(searchBox) ||
    product.title.toLowerCase().includes(searchBox.toLowerCase()) ||
    product.brand?.toLowerCase().includes(searchBox.toLowerCase()) ||
    product.category?.toLowerCase().includes(searchBox.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container className="container">
      <h2>Product List</h2>
      <TextField
        label="Search Products"
        variant="outlined"
        value={searchBox}
        onChange={handleChange}
        className="search-box"
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead className="table-head">
            <TableRow>
              <TableCell className="table-head-cell">ID</TableCell>
              <TableCell className="table-head-cell">Title</TableCell>
              <TableCell className="table-head-cell">Price</TableCell>
              <TableCell className="table-head-cell">Stock</TableCell>
              <TableCell className="table-head-cell">Brand</TableCell>
              <TableCell className="table-head-cell">Category</TableCell>
              <TableCell className="table-head-cell">Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedProducts.map(product => (
              <TableRow key={product.id}>
                <TableCell className="table-cell">{product.id}</TableCell>
                <TableCell className="table-cell">{product.title}</TableCell>
                <TableCell className="table-cell">${product.price}</TableCell>
                <TableCell className="table-cell">{product.stock}</TableCell>
                <TableCell className="table-cell">{product.brand}</TableCell>
                <TableCell className="table-cell">{product.category}</TableCell>
                <TableCell className="table-cell">{product.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(e, value) => setCurrentPage(value)}
        color='error'
        className="pagination"
      />
    </Container>
  );
};

export default ProductList;
