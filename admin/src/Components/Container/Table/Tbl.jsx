import React from "react";
import { Space, Table } from "antd";
const { Column } = Table;
const Tbl = ({ products }) => (
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
          <a>View</a>
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
);
export default Tbl;
