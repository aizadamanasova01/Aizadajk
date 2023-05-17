import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
let urlDetail = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

let imgUrl = "https://www.themealdb.com/images/ingredients/";
const MealDetail = () => {
 const params = useParams();

 const [meal, setMeal] = useState(null);
 const [ingMeal, setIngMeal] = useState([]); // [9]
 const ing = []; // [9 ]

 const navigate = useNavigate();

 useEffect(() => {
	const fetchMeal = async () => {
	const res = await fetch(urlDetail + params.id);
	 const mealsData = await res.json();
	 setMeal(mealsData.meals[0]);
	 for (let i = 1; i < 21; i++) {
	  if (mealsData.meals[0][`strIngredient${i}`]?.length > 0) {
	   ing.push(mealsData.meals[0][`strIngredient${i}`]);
	  }

	  if (mealsData.meals[0][`strMeasure${i}`]?.length > 0) {
	   mera.push(mealsData.meals[0][`strMeasure${i}`]);
	  }
	 }
  
	 setIngMeal([...ing]);
	//  setMeraMeal([...mera]);
	console.log(ing, "ingggggg"); 
};
	
	fetchMeal();
   }, [params.id]);

 if (!meal) return <h2>Loading....</h2>;

 return (
  <div style={{ padding: "0px 30px" }}>
   <h1 className='text-center'>MealDetail Page</h1>
   <div className='d-flex gap-5'>
    <div>
     <h3>{meal.strMeal}</h3>
     <img width='250px' src={meal.strMealThumb} alt='' />
	 <br />
	 <br />
	 {meal.strTags?.split(",").map(tag =>
		<button
		style={{
		 border: "2px solid #ccc",
		 padding: "5px 8px",
		 background: "#f5f5f5",
		 borderRadius: "4px",
		 marginLeft: "4px",
		 color: "#777",
		}}
		key={tag}>
		{tag.toUpperCase()}
	    </button>
       )};
	</div>
	 
    <div>
     <h3>Ingridients</h3>
     <div>
     {ingMeal.length > 0 ? (
       ingMeal?.map(img => {
        console.log(img, "ing Names");
        return (
         <div key={index}>
          <img width='150px' src={`${imgUrl}/${img}.png`} alt='' />
          <p>
			{}{img}</p>
         </div>
        );
       })
      ) : (
       <p>Not Ingridients</p>
      )}
     </div>
    </div>
   </div>
   <div>
    <h1 className='text-center'>Instructions</h1>
    <div>{meal.strInstructions}</div>
   </div>

<div className='video' style={{ textAlign: "center" }}>
<iframe
 width='560'
 height='315'
 src={meal.strYoutube.replace(/watch\?v=/, "embed/")}
 title='YouTube video player'
 frameborder='0'
 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
 allowfullscreen></iframe>
</div>
  </div>
 );
};

export default MealDetail;




 