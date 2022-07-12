fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=American`)
.then(res => res.json())
.then(data => data.meals.forEach(getMeals))


const recipeContainer = document.querySelector(`.recipe-container`)


function getMeals (meals) {



const recipeCard = document.createElement(`div`)
const recipeImageContainer = document.createElement(`div`)
const recipeHeader = document.createElement(`h2`)
const recipeFooter = document.createElement(`footer`)
const reicpeButton = document.createElement(`button`)
const recipeImage = document.createElement(`img`)

    










recipeCard.classList = `recipe`
recipeImage.classList = 'recipe-header recipe-image'
recipeHeader.classList = `recipe-body`
recipeFooter.classList = `recipe-footer`
reicpeButton.classList = `recipe-button`
reicpeButton.innerText = `recipe`
recipeHeader.innerText = meals.strMeal
recipeImage.src = meals.strMealThumb









recipeContainer.append(recipeCard)
recipeCard.append(recipeImageContainer)
recipeImageContainer.append(recipeImage)
recipeCard.append(recipeHeader)
recipeCard.append(recipeFooter)
recipeCard.append(reicpeButton)


}



