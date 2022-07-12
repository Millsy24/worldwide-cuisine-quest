fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=American")
.then(res => res.json())
.then(data => data.meals.forEach(getMeals))

const recipeContainer = document.getElementById("recipe-container")

function getMeals (meals) {
    
    const mealName = document.createElement("p")
    const images = document.createElement("img")
    const recipeButton = document.createElement('button')
    const commentSection = document.createElement('form')
    const inputComment = document.createElement('input')
    const submitComment = document.createElement('input')

    

    

    

    mealName.innerHTML = meals.strMeal
    mealName.style.color = "white"
    images.src = meals.strMealThumb
    images.style = "width: 100px"
    recipeButton.innerText = 'Like'
    commentSection.innerText = 'Add Comment'
    commentSection.style.color ="white"
    inputComment.type = "text"
    submitComment.type = 'submit'
    
    
    

    // console.log(meals);
    recipeContainer.append(mealName)
    recipeContainer.append(images)
    recipeContainer.append(recipeButton)
    recipeContainer.append(commentSection)
    commentSection.append(inputComment)
    commentSection.append(submitComment)


}