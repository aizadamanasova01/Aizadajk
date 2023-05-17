import { useEffect, useState } from "react";
import { Card, Spin } from "antd";
const { Meta } = Card;

let url = "https://fakestoreapi.com/products";

const Products = () => {
  const [products, setProducts] = useState(null);
  const fetchProducts = async () => {
    const request = await fetch(url);
    const response = await request.json();
    console.log(response, "---response");
    setProducts(response); //response = [20]
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!products) {
    return (
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    );
  }

  return (
    <div style={{ paddingTop: "32px" }}>
      <h3 style={{ fontSize: "31px", marginBottom: "35px" }}>Choose</h3>

      <div>
        {products.map((p) => (
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        ))}{" "}
      </div>
    </div>
  );
};

export default Products;
