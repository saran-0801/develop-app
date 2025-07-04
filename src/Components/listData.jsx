import React from "react"

const _dataTable = (_data) => {
    console.log(_data._data)
    const newData = _data._data;
    
    if(!Array.isArray(newData) || newData.length === 0){
        return <p>No Data to display</p>
    }

    const _header = Object.keys(newData || {});
    
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {newData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default _dataTable