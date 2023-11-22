import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
const { TextArea } = Input;
import { EditOutlined } from "@ant-design/icons";
const Edit = ({ id, products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const updateProduct = () => {
    setIsLoading(true);

    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        handleOk();
      })
      .catch((error) => {
        console.error("Error Editing Product:", error);
        setIsLoading(false);
      });
  };
  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <EditOutlined />
      </Button>
      <Modal
        title="Edit Product"
        open={isModalOpen}
        onOk={updateProduct}
        onCancel={handleCancel}
        confirmLoading={isLoading}
      >
        <p>
          Product Name
          <Input
            placeholder="Name"
            value={products.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          Description
          <TextArea
            rows={3}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <p>
          Price
          <Input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </p>
      </Modal>
    </>
  );
};
export default Edit;
