fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=American")
.then(res => res.json())
.then(data => data.meals.forEach(getMeals))

const para = document.getElementById("pics")

function getMeals (meals) {
    const mealName = document.createElement("p")
    const images = document.createElement("img")

    mealName.style.color = "white"

    mealName.innerHTML = meals.strMeal
    images.src = meals.strMealThumb

    // console.log(meals);
    para.append(mealName)
    para.append(images)


}