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

// On load Event Listener
window.addEventListener("load", () => {
    fetchApi();
});

// Button Event Listener
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

    // For the properties not available, returned empty string using Ternary Operator

	const newHTML = `
    <br>
    <h2>${meal.strMeal}</h2>
    <div>
    <img src="${meal.strMealThumb}" alt="Meal Image">
    </div>

    <h2>Ingredients:</h2>
    <ul>
    ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
    </ul>
    <br>
    <p>
    ${meal.strInstructions}
    </p>
    <br>
    <h2>Video Tutorial:</h2>
    ${
        meal.strYoutube
            ? `
            <iframe width="420" height="315"
            src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
            `
            : ''
    }
    `
    mealDiv.innerHTML = newHTML;
};