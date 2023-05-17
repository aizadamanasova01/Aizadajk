import { useEffect, useState } from "react";
import { Card, Spin, Button } from "antd";
import { addItemToCart } from "../../../store";
import { useDispatch } from "react-redux";
const { Meta } = Card;

let url = "https://fakestoreapi.com/products";

const Products = (props) => {
  const [produtcs, setProducts] = useState(null);
  const [filterProdutcs, setFilterProducts] = useState([]);

  const dispatch = useDispatch();

  console.log(props.filterType);

  const fetchProducts = async () => {
    const request = await fetch(url);
    const response = await request.json();
    setProducts(response); // response = [20]
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setFilterProducts(() => {
      switch (props.filterType) {
        case "jewelery":
          return produtcs.filter((el) => el.category === "jewelery");
        case "electronics":
          return produtcs.filter((el) => el.category === "electronics");
        case "men's clothing":
          return produtcs.filter((el) => el.category === "men's clothing");
        case "women's clothing":
          return produtcs.filter((el) => el.category === "women's clothing");
        default:
          return produtcs;
      }
    });
  }, [props.filterType]);

  // if(produtcs ===null){}
  if (!produtcs) {
    return (
      <div style={{ paddingTop: "32px" }}>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "32px" }}>
      <h3 style={{ fontSize: "32px", marginBottom: "35px" }}>Choose</h3>

      <div className="d-flex flex-wrap" style={{ gap: "15px" }}>
        {filterProdutcs?.length > 0
          ? filterProdutcs.map((p) => (
              <Card
                key={p.id}
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img height={250} alt="example" src={p.image} />}
              >
                <Meta
                  title={p.title}
                  description={p.description.slice(0, 80) + " ..."}
                />
                <div
                  className="d-flex jc-between ai-center"
                  style={{ marginTop: "25px" }}
                >
                  <p>
                    <b>From 55 $</b>
                  </p>
                  <Button shape="round" size="middle">
                    <b>+ add to cart</b>
                  </Button>
                </div>
              </Card>
            ))
          : produtcs.map((p) => (
              <Card
                key={p.id}
                hoverable
                style={{
                  width: 260,
                }}
                cover={<img height={250} alt="example" src={p.image} />}
              >
                <Meta
                  title={p.title}
                  description={p.description.slice(0, 80) + " ..."}
                />
                <div
                  className="d-flex jc-between ai-center"
                  style={{ marginTop: "25px" }}
                >
                  <p>
                    <b>From {p.price} $</b>
                  </p>
                  <Button
                    onClick={() => {
                      dispatch(addItemToCart(p));
                    }}
                    shape="round"
                    size="middle"
                  >
                    <b>+ add to cart</b>
                  </Button>
                </div>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default Products;
