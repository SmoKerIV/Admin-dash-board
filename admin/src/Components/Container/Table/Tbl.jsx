import React from "react";
import { Space, Table, Pagination } from "antd";
import Edit from "../Modal/Edit";
import Delete from "../Modal/Delete";
import "./Tbl.css";

function Tbl({ products, setSkip }) {
  const handleEditSuccess = () => {
    alert("Product edited successfully");
  };
  const handleDeleteSuccess = () => {
    alert("Product deleted successfully");
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>
            <Edit
              id={record.id}
              onEdit={handleEditSuccess}
              products={products}
            />
          </a>
          <a>
            <Delete
              id={record.id}
              onDelete={handleDeleteSuccess}
              products={products}
            />
          </a>
        </Space>
      ),
    },
  ];
  const columns2 = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>
            <Edit
              id={record.id}
              onEdit={handleEditSuccess}
              products={products}
            />
          </a>
          <a>
            <Delete
              id={record.id}
              onDelete={handleDeleteSuccess}
              products={products}
            />
          </a>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className="table1">
        <Table dataSource={products} pagination={false} columns={columns} />
      </div>
      <center>
        <div className="table2">
          <Table
            dataSource={products}
            columns={columns2}
            pagination={false}
            style={{ width: "250px" }}
          />
        </div>
          <Pagination
            defaultCurrent={1}
            total={100}
            showSizeChanger={false}
            onChange={(page) => setSkip((page - 1) * 10)}
          />
      </center>
    </div>
  );
}

export default Tbl;
