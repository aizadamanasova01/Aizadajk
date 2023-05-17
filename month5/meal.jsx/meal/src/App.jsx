import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Info from "./pages/info/Info";
import Meal from "./pages/meal/Meal";
import MealDetail from "./pages/meal/MealDetail";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/meal' element={<Meal />} />
					<Route path='/meal/:id' element={<MealDetail />} />
					<Route path='/info' element={<Info />} />
					<Route
						path='*'
						element={
							<div style={{ textAlign: "center" }}>
								<h1>404</h1>
								<h2>Страница недоступна</h2>
							</div>
						}
					/>
				</Route>
			</Routes>
		</div>
	);
};

export default App;
