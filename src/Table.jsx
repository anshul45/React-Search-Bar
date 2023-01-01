import React from "react";

const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>City_Name</th>
          <th>State</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
