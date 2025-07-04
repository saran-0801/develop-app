
import React, { useState, useEffect } from 'react';

import ItemViewScreen from './Components/DropDownList';
import _dataTable from './Components/listData';
import FormData from './Components/FormData';

const App = () => {

  const myData = [
    { id: 1, name: 'Alice', age: 30, city: 'New York' },
    { id: 2, name: 'Bob', age: 24, city: 'London' },
    { id: 3, name: 'Charlie', age: 35, city: 'Paris' },
  ];

  return (
    <div>
      {/* <h1>User Data Table</h1> */}
      <_dataTable _data={myData} />
      <ItemViewScreen />
      <FormData/>
    </div>
  );
}

export default App;