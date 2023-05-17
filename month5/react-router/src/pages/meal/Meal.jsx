import { useEffect, use } from "react";






useEffect(() => {
    const fetchMeals = async
})







if (!meals) return <h2>Loadin......</h2>;

return (
    <div className='d-flex flex=wrap'>
        {meals?.map(el => (
            <div key={el.idMeal} class='card' style={{width: "250px"}}>
                <img src={el.str} alt="" />

            </div>
        ))}
    </div>
)