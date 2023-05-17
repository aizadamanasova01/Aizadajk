import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
let urlDetail = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
const MealDetail = () => {
    const params = useParams
    console.log(params.id);

    const [meal, setMeal] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchMeal = async () = {
            
        }
    })


  return <div>MealDetail  Page</div>

}

return (
    <div>
        <div>
            <div>

            </div>
            <div>
                
            </div>


        </div>
    </div>
)
export default MealDetail