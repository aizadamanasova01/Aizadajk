import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	return (
		<div>
			Home PAGE
			<div
				onClick={() => {
					navigate("/meal");
				}}
				style={{
					width: "100px",
					height: "50px",
					lineHeight: "50px",
					background: "gray",
					color: "#fff",
					borderRadius: "8px",
					textAlign: "center",
					cursor: "pointer",
				}}>
				{/* <Link to='/meal'> */}
				<h4>Meal</h4>
				{/* </Link> */}
			</div>
		</div>
	);
};

export default Home;
