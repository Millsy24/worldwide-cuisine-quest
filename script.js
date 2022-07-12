fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=American`)
.then(res => res.json())
.then(data => data.meals.forEach(getMeals))


const recipeContainer = document.getElementById(`recipe-container`)


function getMeals (meals) {



const recipeCard = document.createElement(`div`)
const recipeHeader = document.createElement(`h2`)
const recipeImage = document.createElement(`img`)








recipeCard.classList = `recipe`

recipeHeader.innerText = meals.strMeal
recipeImage.src = meals.strMealThumb









recipeContainer.append(recipeCard)
recipeCard.append(recipeHeader)
recipeCard.append(recipeImage)

}



