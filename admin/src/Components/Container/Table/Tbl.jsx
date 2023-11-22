import React from "react";
import { Space, Table } from "antd";
const { Column } = Table;

import Edit from "../Modal/Edit";
import Delete from "../Modal/Delete";
const Table1 = ({ products }) => (
  <div className="table-1">
    <Table dataSource={products}>
      <Column title="ID" dataIndex="id" key="id" />
      <Column title="Title" dataIndex="title" key="title" />
      <Column title="Description" dataIndex="description" key="description" />
      <Column title="Price" dataIndex="price" key="price" />
      <Column
        title="Action"
        key="action"
        render={(_, record) => (
          <Space size="middle">
            <a>
              <Edit
                id={record.id}
                onEdit={handleEditSuccess}
                products={products}
              />
            </a>
            <a>
              <Delete id={record.id} onDelete={handleDeleteSuccess} />
            </a>
          </Space>
        )}
      />
    </Table>
  </div>
  
);
  const handleEditSuccess = () => {
    alert("Product edited successfully");
  };
    const handleDeleteSuccess = () => {
    alert("Product deleted successfully");
}
export default Table1;
