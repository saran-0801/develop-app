import React, { useState, useEffect } from 'react';
import {
  Grid, TextField, Button, FormControlLabel, FormLabel,
  RadioGroup, Radio, CardContent, CardHeader, Card,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const FormData = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailId: '',
    age: '',
    phone: '',
    gender: '',
  });

  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

   const [errors, setErrors] = useState({
    name: '',
    emailId: '',
    age: '',
    phone: '',
    gender: '',
  });

  
  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('Users')) || [];
    setUsers(existingData);
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: '', 
    });
  };


  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    // regex patterns
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ageRegex = /^\d+$/;
    const phoneRegex = /^\d{10}$/;

    if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Name must contain only letters';
      valid = false;
    }
    if (!emailRegex.test(formData.emailId)) {
      newErrors.emailId = 'Enter a valid email address';
      valid = false;
    }
    if (!ageRegex.test(formData.age) || parseInt(formData.age) <= 0 || parseInt(formData.age) > 999) {
      newErrors.age = 'Minimum Length is 3';
      valid = false;
    }
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'PhoneNumber must be 10 digits';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    let updatedUsers;

    if (editIndex !== null) {
      updatedUsers = [...users];
      updatedUsers[editIndex] = formData;
      setEditIndex(null);
    } else {
      updatedUsers = [...users, formData];
    }

    localStorage.setItem('Users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);

    setFormData({
      name: '',
      emailId: '',
      age: '',
      phone: '',
      gender: '',
    });

    setErrors({});
  };

  
  const handleEdit = (index) => {
    console.log('index',index);
    setFormData(users[index]);
    setEditIndex(index);
    setErrors({});
  };

  
  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    localStorage.setItem('Users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setEditIndex(null);
  };

  return (
    <Grid container spacing={4} sx={{ padding: 4 }}>
      
      <Grid item xs={12} md={4}>
        <Card sx={{ p: 3, boxShadow: 3 }}>
          <CardHeader title="User Registration Form" sx={{ textAlign: 'center' }} />
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container direction="column">
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{ mt: 2 }}
                  error={!!errors.name}
                  helperText={errors.name}
                />
                <TextField
                  label="EmailId"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleChange}
                  sx={{ mt: 2 }}
                  error={!!errors.emailId}
                  helperText={errors.emailId}
                />
                <TextField
                  label="Age"
                  name="age"
                  type="text"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxLength: 3 }}
                  value={formData.age}
                  onChange={(e) => {
                    if ((/^\d{0,10}$/).test(e.target.value)) {
                      handleChange(e);
                    }
                  }}
                  sx={{ mt: 2 }}
                  error={!!errors.age}
                  helperText={errors.age}
                />
                <TextField
                  label="Phone"
                  name="phone"
                  type="text"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' , maxLength: 10 }}
                  value={formData.phone}
                  onChange={(e) => {
                    if ((/^\d{0,10}$/).test(e.target.value)) {
                      handleChange(e);
                    }
                  }}
                  sx={{ mt: 2 }}
                  error={!!errors.phone}
                  helperText={errors.phone}
                />
                <FormLabel sx={{ mt: 2 }}>Gender</FormLabel>
                <RadioGroup
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3 }}
                >
                  {editIndex ? 'Update' : 'Submit'}
                </Button>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>

      
      <Grid item xs={8} md={12}>
        <Typography variant="h5" sx={{ mb: 2 }}>User Data Table</Typography>
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
              {users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No users yet.
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.emailId}</TableCell>
                    <TableCell>{user.age}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.gender}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        sx={{ mr: 1 }}
                        onClick={() => handleEdit(index)}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        color="error"
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
      </Grid>
    </Grid>
  );
};

export default FormData;
