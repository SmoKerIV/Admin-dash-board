import React, { useState } from "react";
import { Button, Modal, Image } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const Delete = ({ id, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    if (id === undefined) {
      console.error("Product ID is undefined. Cannot delete.");
      return;
    }

    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log(`Product with ID ${id} deleted successfully`);
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error(`Error deleting product with ID ${id}:`, error);
      });
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    handleDelete();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{ backgroundColor: "red", color: "white" }}
      >
        <DeleteOutlined />
      </Button>
      <Modal
        title="Delete Product?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
};

export default Delete;
