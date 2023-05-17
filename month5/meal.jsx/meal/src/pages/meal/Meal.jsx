import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
const Meal = () => {
	const [meals, setMeals] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchMeals = async () => {
			const res = await fetch(url);
			const mealsData = await res.json();
			console.log(mealsData.meals);
			setMeals(mealsData.meals);
		};

		fetchMeals();
	}, []);

	if (!meals) return <h2>Loading....</h2>;

	return (
		<div className='d-flex flex-wrap'>
			{meals?.map(el => (
				<div key={el.idMeal} class='card' style={{ width: "250px" }}>
					<img src={el.strMealThumb} class='card-img-top' alt='meal' />
					<div class='card-body'>
						<h5 class='card-title'>{el.strMeal}</h5>
						<p class='card-text'>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
						<p
							class='btn btn-primary'
							onClick={() => {
								navigate(`/meal/${el.idMeal}`);
							}}>
							more detail
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Meal;
