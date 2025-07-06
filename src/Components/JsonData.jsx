import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography
} from '@mui/material';

const UserTable = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Saran', age: 25, phone: '123-456-7890' },
    { id: 2, name: 'Kalai', age: 30, phone: '555-123-4567' },
    { id: 3, name: 'Sandy', age: 22, phone: '987-654-3210' },
    { id: 4, name: 'Ranan', age: 28, phone: '321-654-0987' }
  ]);

  // const _jsonData=() => {
  //   setUsers(users);
  //   console.log(users, "users in UserTable");
  // }
  
  useEffect(() => {
    setUsers(users);
  },[])

  return (
    <div style={{ padding: '120px' }}>
      <Typography variant="h4" gutterBottom>
        User List
      </Typography>

      <TableContainer  component={Paper}>
        <Table item xs={12} md={8}>
          <TableHead  sx={{ backgroundColor: '#f0f0f0' }}>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Age</strong></TableCell>
              <TableCell><strong>Phone</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserTable;
