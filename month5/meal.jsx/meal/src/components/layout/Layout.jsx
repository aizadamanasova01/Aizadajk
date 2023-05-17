import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = () => {
	return (
		<div>
			<Header />
			<div
				style={{
					// height: "300px",
					background: "lightblue",
				}}>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
