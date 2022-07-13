fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
.then(res => res.json())
.then(data => data.meals.forEach(getMeals))



const recipeContainer = document.querySelector(`.recipe-container`)


 function getMeals (meals) {
    console.log(meals)
    



const recipeCard = document.createElement(`div`)
const recipeImageDiv = document.createElement(`div`)
const recipeHeader = document.createElement(`h2`)
const recipeFooter = document.createElement(`footer`)
const reicpeButton = document.createElement(`button`)
const recipeImage = document.createElement(`img`)
const recipeCountry = document.createElement(`h4`)
const recipeCategory = document.createElement(`h4`)
//const recipeInstructions = document.createElement(`p`)

    










recipeCard.classList = `recipe`
recipeImage.classList = 'recipe-image'
recipeHeader.classList = `recipe-body`
recipeFooter.classList = `recipe-footer`
reicpeButton.classList = `recipe-button`
reicpeButton.innerText = `recipe`
recipeHeader.innerText = meals.strMeal
recipeCountry.innerText = `Country: ${meals.strArea}`
recipeCategory.innerText = `Category: ${meals.strCategory}`
recipeImage.src = meals.strMealThumb
//recipeInstructions.innerText = meals.strInstructions









recipeContainer.append(recipeCard)
recipeCard.append(recipeImageDiv)
recipeImageDiv.append(recipeImage)
recipeHeader.append(recipeCountry)
recipeHeader.append(recipeCategory)
recipeCard.append(recipeHeader)
recipeCard.append(recipeFooter)
recipeCard.append(reicpeButton)
//recipeCard.append(recipeInstructions)






 }


    
