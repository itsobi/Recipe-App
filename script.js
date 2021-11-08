// When the page first loads, it should display a random recipe, complete   with a picture of the meal.

//  Name of the meal, a button to watch the YouTube video

// The instructions of how to make the meal, along with the list of ingredients.

const btn = document.querySelector(".btn");
const mealDiv = document.querySelector(".meal");

// fetchApi function
function fetchApi() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(response => {
        createMeal(response.meals[0]);
    })
    .catch(error => {
        console.log(error);
    });
}

window.addEventListener("load", () => {
    fetchApi();
});

btn.addEventListener('click', () => {
	fetchApi();
});

// createMeal Function
const createMeal = (meal) => {
	const ingredients = [];

	// Get all ingredients. (20)
	for (let i = 1; i <= 20; i++) {
		if (meal[`strIngredient${i}`]) {
			ingredients.push(
				`${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}`
			);
		} else {
			// stop if no more ingredients
			break;
		}
	}

	const newHTML = `
    <div>
    <img src="${meal.strMealThumb}" alt="Meal Image">
    </div>

    <h2>Ingredients:</h2>
    <ul>
    ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
    </ul>
    
    `

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    mealDiv.innerHTML = newHTML;
};