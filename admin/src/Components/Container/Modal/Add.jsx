import React, { Component, useState } from "react";
import { Button, Modal, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const Add=()=> {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const showAdding = () => {
    setIsModalOpen(true);
  };

  const handleOK = () => {
    setIsModalOpen(false);
    alert("Product added successfully");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addNewProduct = () => {
    setIsLoading(true);

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
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
        handleOK();
      })
      .catch((error) => {
        console.error("Error adding new product:", error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={showAdding}
        style={{ backgroundColor: "black", color: "white"  }}
      >
        Add Product
      </Button>
      <Modal
        title="Add Product"
        open={isModalOpen}
        onOk={addNewProduct}
        onCancel={handleCancel}
        confirmLoading={isLoading}
      >
        <p>
          Product Name
          <Input
            placeholder="Name"
            value={title}
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
    </div>
  );
}

export default Add;
