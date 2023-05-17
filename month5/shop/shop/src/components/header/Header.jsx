import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const { Header: AntHeader } = Layout;
import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
// local import
import logo from "../../assets/logo-audere-b-01.svg.png";

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  textAlign: "center",
  color: "#000",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#fff",
  marginTop: "34px",
  // border: "1px solid red",
};

const Header = () => {
  const cart = useSelector((store) => store.cart);
  const allSumma = cart?.reduce((total, item) => (total += item.price), 0);

  return (
    <Layout>
      <AntHeader style={headerStyle}>
        <div>
          <ul className="d-flex" style={{ columnGap: "22px" }}>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/dealers">Dealers</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="d-flex" style={{ columnGap: "15px" }}>
            <li>
              <BsSearch />
            </li>
            <li className="cart-actions">
              <Link to="/cart">
                <span>
                  <b>{allSumma.toFixed(2)} $</b>
                </span>
                <span>
                  <SlBasket />
                </span>
                <span
                  style={{
                    background: "#000",
                    color: "#fff",
                    borderRadius: "50%",
                    padding: "5px 10px",
                  }}
                >
                  {cart.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </AntHeader>
    </Layout>
  );
};

export default Header;
