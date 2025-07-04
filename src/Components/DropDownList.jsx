import React, { useState } from "react";

const ItemViewScreen = () => {
  
  const data = [
    { id: 1, itemCode: "90917-TC008", itemName: "Item A" },
    { id: 2, itemCode: "17141-F2140-0305BB", itemName: "Item B" },
    { id: 3, itemCode: "17141-F2140-0406BB", itemName: "Item C" },
    { id: 4, itemCode: "17450-V1010", itemName: "Item D" },
    { id: 5, itemCode: "SG421-W0320-BB", itemName: "Item E" },
    { id: 6, itemCode: "SG422-W0170-BB", itemName: "Item F" },
    { id: 7, itemCode: "SG423-W0030-BB", itemName: "Item G" },
    { id: 8, itemCode: "14150-76T80", itemName: "Item H" },
  ];

  const [selectedItem, setSelectedItem] = useState({});
  
  const handleSelectChange = (e) => {
    const selectedCode = e.target.value;
    const item = data.find((d) => d.itemCode === selectedCode);
    setSelectedItem(item);
  };

  console.log(selectedItem);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Item View Screen</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>Select an Item: </label>
        <select onChange={handleSelectChange} defaultValue="">
          <option value="" disabled defaultValue="">
            -- Select --
          </option>
          {data.map((item) => (
            <option key={item.id} value={item.itemCode}>
              {item.itemCode}
            </option>
          ))}
        </select>
      </div>

      {selectedItem && (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            width: "300px",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h3>Item Details</h3>
          <p><strong>ID:</strong> {selectedItem.id}</p>
          <p><strong>Item Code:</strong> {selectedItem.itemCode}</p>
          <p><strong>Item Name:</strong> {selectedItem.itemName}</p>
        </div>
      )}
    </div>
  );
};

export default ItemViewScreen;
