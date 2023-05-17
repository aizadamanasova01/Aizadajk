import React from "react";
import { Select, Spase, Button } from "antd";

const options = [];

const FilterButtons = () => {
  const btns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Electronics",
      type: "electronics",
    },
    {
      name: "Jewelery",
      type: "lewelery",
    },
    {
      name: "Man's",
      type: "man's clothing",
    },
    {
      name: "Women's",
      type: "women's clothing",
    },
  ];
  return (
    <div className="d-flex" jc-between>
      <div>
        {btns.map((el) => (
          //hvowvygde06bvkk3
          <button
            style={{
              marginRight: "10px",
              background: "#f9f9f9",
            }}
            key={el.type}
            shape="round"
          >
            {el.name}
          </button>
        ))}
      </div>
      <div>
        <Select>
          defaultValue='All' style=
          {{
            width: 140,
          }}
        </Select>
      </div>
    </div>
  );
};

export default FilterButtons;
