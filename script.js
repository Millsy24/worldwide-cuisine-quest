fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
.then(res => res.json())
.then(data => data.meals.forEach(getMeals))



const recipeContainer = document.querySelector(`.recipe-container`)


 function getMeals (meals) {
    // console.log(meals)
    


const recipeCard = document.createElement(`div`)
const recipeImageDiv = document.createElement(`div`)
const recipeHeader = document.createElement(`h2`)
const recipeFooter = document.createElement(`footer`)
const recipeButton = document.createElement(`button`)
const recipeImage = document.createElement(`img`)
const recipeCountry = document.createElement(`h4`)
const recipeCategory = document.createElement(`h4`)
const recipeInstructions = document.createElement(`p`)
const commentForm = document.createElement('form')
const commentInput = document.createElement('input')
const commentButton = document.createElement('input')
//const commentLabel = document.createElement('label')
const commentList = document.createElement('ul')

    

recipeCard.classList = `recipe`
recipeImage.classList = 'recipe-image'
recipeHeader.classList = `recipe-body`
recipeFooter.classList = `recipe-footer`
recipeButton.classList = `recipe-button`
commentForm.classList = 'comment-form'
commentInput.id = 'comment-input'
commentButton.classList = 'comment-button'
commentInput.type = 'text'
//commentInput.innerText = 'add a comment'
commentButton.type = 'submit'
//commentButton.innerText = 'add comment'
 commentList.id = 'comment-list'
 
recipeButton.innerText = `recipe`
recipeHeader.innerText = meals.strMeal
recipeCountry.innerText = `Country: ${meals.strArea}`
recipeCategory.innerText = `Category: ${meals.strCategory}`
recipeImage.src = meals.strMealThumb
recipeInstructions.innerText = meals.strInstructions




recipeContainer.append(recipeCard)
recipeCard.append(recipeImageDiv)
recipeImageDiv.append(recipeImage)
recipeHeader.append(recipeCountry)
recipeHeader.append(recipeCategory)
recipeCard.append(recipeHeader)
recipeCard.append(recipeFooter)
recipeCard.append(recipeButton)
recipeCard.append(recipeInstructions)
recipeFooter.append(commentForm)
commentForm.append(commentInput)
commentForm.append(commentButton)
recipeFooter.append(commentList)


commentForm.addEventListener('submit', (e) => {
        e.preventDefault() 
        const comment = commentForm.querySelector(`#comment-input`).value
        const newComment = document.createElement('li')
        newComment.innerText = comment
        commentList.append(newComment)
        commentForm.reset()






})


recipeInstructions.style.display = "none"



recipeButton.addEventListener("click", pop)


function pop() {
    if(recipeInstructions.style.display === "none") {
        recipeInstructions.style.display = "block"
    } else{
        recipeInstructions.style.display = "none"
    }
}


 }



const title = document.getElementById("logo")

title.addEventListener('mouseover', () => {
title.style.transform = "scale(1.025)";
})

title.addEventListener('mouseleave', () => {
    title.style.transform = "scale(0.975)"
})


 

   
