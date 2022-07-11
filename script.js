

fetch ("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
.then(res => res.json())
.then(data => {

    // console.log(data);
    // console.log(data.meals);
    data.meals.forEach(element => {
        // console.log(element.strArea);
        cuisine = element.strArea
        console.log(cuisine);

        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`)
        .then(response => response.json())
        .then(data1 => {
            // console.log(dishes);
            // console.log(dishes.meals);
            data1.meals.forEach(element1 => {
                dishes = element1.strMeal;
                // console.log(dishes);
            })
            console.log(cuisine);
            console.log(dishes);
        })



    });

})



