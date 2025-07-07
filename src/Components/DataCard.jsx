import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';




const UserDataCard = ({ users, handleEdit, handleDelete }) => (
  console.log(users, "users in UserDataCard"),
  <TableContainer component={Paper}>
    <Table>
      <TableHead sx={{ backgroundColor: '#f0f0f0' }}>
        <TableRow>
          <TableCell><strong>Name</strong></TableCell>
          <TableCell><strong>Email</strong></TableCell>
          <TableCell><strong>Age</strong></TableCell>
          <TableCell><strong>Phone</strong></TableCell>
          <TableCell><strong>Gender</strong></TableCell>
          <TableCell><strong>Action</strong></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users && users.length === 0 ? (
          <TableRow>
            <TableCell colSpan={6} align="center">
              No users yet.
            </TableCell>
          </TableRow>
        ) : (
          users && users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.emailId}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>
                <Button
                  style={{ color: 'skyblue' }}
                  size="small"
                  sx={{ mr: 1 }}
                  onClick={() => handleEdit(index)}
                >
                  <EditIcon />
                </Button>
                <Button
                  style={{ color: '#fa0217' }}
                  size="small"
                  onClick={() => handleDelete(index)}
                >
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  </TableContainer>
);

export default UserDataCard;