import React from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";

import cartImg from "../../../assets/cart-img.png";

const Cart = () => {
  const columns = [
    {
      title: "IMAGE",
      dataIndex: "image",
      key: "image",
      render: (text) => <img width={60} src={text} alt="" />,
    },
    {
      title: "COUNT",
      dataIndex: "count",
      key: "count",
      render: (count) => <p> X {count}</p>,
    },
    {
      title: "NAME",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "PRICE",
      dataIndex: "price",
      key: "price",
      render: (price, item) => (
        <p style={{ width: "80px" }}>
          <b>{price * item.count} $</b>
        </p>
      ),
    },
    // {
    //   title: "Rating",
    //   dataIndex: "rating",
    //   key: "rating",
    //   //    render: (key) => <div>{key,connt}</div>
    //   render: ({ r, count }) => <div>{count}</div>,
    // },
  ];

  const data = [
    {
      id: "1",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      title: "John Brown",
      description: "John Brown DESC",
      price: 32,
      rating: {
        r: "4.1",
        count: 55,
      },
    },
  ];

  const cart = useSelector((store) => store.cart);

  const tableData = cart;
  const allSum = cart.reduce((total, item) => (total += item.price), 0);

  if (!cart.length) {
    return (
      <div className="cart-page">
        <h3>The basket is empty 👀</h3>
        <h6>
          Most likely, you have not chosen anything. To order, go to the main
          page.
        </h6>
        <img src={cartImg} alt="" />
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "50px" }}>
      <Table columns={columns} dataSource={tableData} />
      <div style={{ textAlign: "end", marginRight: "80px" }}>
        <h3> ITOGO {allSum.toFixed(2)} $</h3>
      </div>
    </div>
  );
};

export default Cart;
