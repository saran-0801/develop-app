import React from 'react';
import { Card, CardContent, Typography, IconButton, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const DataCard = ({ item, onEdit, onDelete }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card>
      <CardContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography>Age: {item.age}</Typography>
        <Typography>Phone: {item.phone}</Typography>
        <Typography>Gender: {item.gender}</Typography>
        <div style={{ marginTop: 10 }}>
          <IconButton color="primary" onClick={onEdit}><EditIcon /></IconButton>
          <IconButton color="error" onClick={onDelete}><DeleteIcon /></IconButton>
        </div>
      </CardContent>
    </Card>
  </Grid>
);

export default DataCard;
