import React, { useState } from "react";
import { Select, Space, Button } from "antd";

const options = [
	{
		value: "popularity",
		label: "popularity",
	},
	{
		value: "by price",
		label: "by price",
	},
	{
		value: "alphabetically",
		label: "alphabetically",
	},
];

const FilterButtons = props => {
	const [btnActive, setBtnActive] = useState("all");

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
			type: "jewelery",
		},
		{
			name: "Men 's",
			type: "men's clothing",
		},
		{
			name: "Women 's",
			type: "women's clothing",
		},
	];

	const handleChange = value => {
		console.log(`selected ${value}`);
	};

	const setAvtivBtn = typeBtn => {
		setBtnActive(typeBtn);
		props.onSetFilterType(typeBtn);
	};

	return (
		<div className='d-flex jc-between'>
			<div>
				{btns.map(el => {
					let activColor = el.type === btnActive ? "#282828" : "#f9f9f9";
					return (
						<Button
							onClick={() => setAvtivBtn(el.type)}
							style={{
								marginRight: "10px",
								background: activColor,
								color: el.type === btnActive ? "#fff" : "#000",
							}}
							key={el.type}
							shape='round'>
							<b>{el.name}</b>
						</Button>
					);
				})}
			</div>
			<div className='d-flex ai-center'>
				<h3>Sorting by:</h3>
				<Select
					defaultValue='All'
					style={{
						width: 140,
					}}
					onChange={handleChange}
					options={options}
				/>
			</div>
		</div>
	);
};

export default FilterButtons;
