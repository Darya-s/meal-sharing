import React from "react";

function Meals(){
const [meals,setMeals] = useState([]);
useEffect(() => {
  fetch("/api/meals")
    .then(res => res.json())
    .then(
      (result) => {
        setMeals(result);
      },
      (error) => {
        console.log(error)
      }
    )
}, [])

return meals;
}

export default Meals;