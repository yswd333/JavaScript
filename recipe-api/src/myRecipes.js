const myRecipes = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    prepTime: "40 minutes",
    description: "A classic Italian pasta dish with rich meat sauce.",
    ingredients: [
      "250g spaghetti",
      "200g ground beef",
      "1 onion",
      "2 garlic cloves",
      "400g crushed tomatoes",
      "Olive oil",
      "Salt",
      "Black pepper",
    ],
    instructions: [
      "Cook spaghetti according to package instructions.",
      "Heat oil and sauté onion and garlic.",
      "Add ground beef and cook until browned.",
      "Add tomatoes, salt, and pepper.",
      "Simmer for 20 minutes and serve over pasta.",
    ],
  },
  {
    id: 2,
    name: "Omelette with Vegetables",
    prepTime: "10 minutes",
    description: "A quick and healthy breakfast option.",
    ingredients: [
      "2 eggs",
      "1/2 onion",
      "1/2 tomato",
      "Salt",
      "Pepper",
      "1 tsp oil",
    ],
    instructions: [
      "Beat the eggs in a bowl.",
      "Sauté onion and tomato.",
      "Pour eggs into the pan.",
      "Cook until set and fold.",
      "Serve hot.",
    ],
  },
  {
    id: 3,
    name: "Avocado Tuna Salad",
    prepTime: "15 minutes",
    description: "A healthy and filling salad.",
    ingredients: [
      "1 can tuna",
      "1/2 avocado",
      "1 cucumber",
      "1 tomato",
      "Lemon juice",
      "Salt",
      "Pepper",
    ],
    instructions: [
      "Chop vegetables.",
      "Mash avocado lightly.",
      "Drain tuna.",
      "Mix everything together.",
      "Season and serve.",
    ],
  },
  {
    id: 4,
    name: "Chicken Stir Fry",
    prepTime: "25 minutes",
    description: "A quick Asian-style dish with vegetables.",
    ingredients: [
      "200g chicken breast",
      "1 bell pepper",
      "1 carrot",
      "Soy sauce",
      "Garlic",
      "Oil",
    ],
    instructions: [
      "Slice chicken and vegetables.",
      "Heat oil in a pan.",
      "Cook chicken until done.",
      "Add vegetables and stir fry.",
      "Add soy sauce and serve.",
    ],
  },
  {
    id: 5,
    name: "Pancakes",
    prepTime: "20 minutes",
    description: "Fluffy pancakes perfect for breakfast.",
    ingredients: [
      "1 cup flour",
      "1 egg",
      "1 cup milk",
      "1 tbsp sugar",
      "1 tsp baking powder",
    ],
    instructions: [
      "Mix all ingredients into batter.",
      "Heat a pan.",
      "Pour batter and cook until bubbles form.",
      "Flip and cook the other side.",
      "Serve with syrup.",
    ],
  },
  {
    id: 6,
    name: "Greek Salad",
    prepTime: "10 minutes",
    description: "A fresh Mediterranean salad.",
    ingredients: [
      "Tomatoes",
      "Cucumber",
      "Feta cheese",
      "Olives",
      "Olive oil",
      "Oregano",
    ],
    instructions: [
      "Chop vegetables.",
      "Add feta and olives.",
      "Drizzle with olive oil.",
      "Sprinkle oregano.",
      "Mix and serve.",
    ],
  },
  {
    id: 7,
    name: "Grilled Cheese Sandwich",
    prepTime: "10 minutes",
    description: "A crispy and cheesy sandwich.",
    ingredients: ["2 slices bread", "Cheese", "Butter"],
    instructions: [
      "Butter the bread.",
      "Place cheese between slices.",
      "Grill on pan until golden.",
      "Flip and cook other side.",
      "Serve hot.",
    ],
  },
  {
    id: 8,
    name: "Chicken Caesar Salad",
    prepTime: "20 minutes",
    description: "A classic salad with grilled chicken.",
    ingredients: [
      "Chicken breast",
      "Lettuce",
      "Croutons",
      "Parmesan",
      "Caesar dressing",
    ],
    instructions: [
      "Grill the chicken.",
      "Chop lettuce.",
      "Slice chicken.",
      "Mix all ingredients.",
      "Add dressing and serve.",
    ],
  },
  {
    id: 9,
    name: "Vegetable Soup",
    prepTime: "35 minutes",
    description: "A warm and comforting soup.",
    ingredients: ["Carrots", "Potatoes", "Onion", "Celery", "Vegetable broth"],
    instructions: [
      "Chop vegetables.",
      "Add to pot with broth.",
      "Bring to boil.",
      "Simmer for 25 minutes.",
      "Serve warm.",
    ],
  },
  {
    id: 10,
    name: "Chocolate Mug Cake",
    prepTime: "5 minutes",
    description: "A quick chocolate dessert in a mug.",
    ingredients: [
      "4 tbsp flour",
      "2 tbsp cocoa powder",
      "3 tbsp sugar",
      "3 tbsp milk",
      "2 tbsp oil",
    ],
    instructions: [
      "Mix all ingredients in a mug.",
      "Microwave for 1-2 minutes.",
      "Let cool slightly.",
      "Serve and enjoy.",
    ],
  },
];

let nextId = 11;

const status = document.getElementById("status");
const results = document.getElementById("results");
const recipeCardsContainer = document.getElementById("recipe-cards-container");
let form = document.getElementById("recipe-form");
let recipeNameInput = document.getElementById("name");
let descriptionInput = document.getElementById("description");
let ingredientsInput = document.getElementById("ingredients");
let submitBtn = document.getElementById("submit-btn");
let cancelBtn = document.getElementById("cencel-btn");
let formTitle = document.getElementById("form-title");

function addRecipe() {
  results.innerHTML = "";
  const back = document.createElement("div");
  back.id = "back";
  back.className = "back-button";
  back.innerHTML = `<p>←Back</p>`;
  form.innerHTML = `
    <div class="form-box">
        <h2 id="form-title">Add New Recipe</h2>
        <form id="recipe-form">
          <div class="form-info">
            <div class="field">
              <label for="name">Recipe name:</label>
              <input type="text" id="name" />
            </div>
            <div class="field">
              <label for="description">description:</label>
              <input
                type="text"
                id="description"
                placeholder="Enter a short description about your recipe"
              />
              <label for="ingredients">ingredients:</label>
              <input
                type="text"
                id="ingredients"
              />
              <label for="instructions">instructions:</label>
              <input
                type="text"
                id="instructions"
              />
              
            </div>
            <div class="field field-small">
              <label for="prepTime">prep Time: </label>
              <input
                type="number"
                id="age"
                min="1"
              />
              <label for="prepTime">minutes</label>
            </div>
          </div>
          <div class="form-buttons">
            <button type="submit" id="submit-btn">Add Recipe</button>
            <button type="button" id="cancel-btn">Cancel</button>
            <button type="reset" id="reset-btn">Reset</button>
          </div>
        </form>
      </div>`;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = name.value;
    let description = description.value;
    let ingredients = ingredients.value;
    let instructions = instructions.value;
    let prepTime = Number(prepTime.value);
    let newRecipe = {
      id: nextId,
      name: name,
      description: description,
      ingredients: ingredients,
      instructions: instructions,
      prepTime: prepTime,
    };
    myRecipes.push(newRecipe);
    nextId++;
  });
  results.appendChild(back);
  results.appendChild(form);

  back.addEventListener("click", () => {
    renderResults(myRecipes);
    recipeCard.textContent = "";
  });
}

function renderResults(myRecipesData) {
  console.log(myRecipesData);
  results.innerHTML = `
      <h1> My Recipes</h1>
      <button id="renderAddBtn">Add new Recipe</button>`;
  const gridContainer = document.createElement("div");
  gridContainer.id = "gridContainer";
  myRecipesData.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="recipe-info">
        <div class="recipe-title"><h2>${recipe.name}</h2></div>
        <div class="details">
          <div class="cook-time">⌛️ ${recipe.prepTime} minutes</div>
          <div class="description">${recipe.description}</div>
        </div>
    </div>
    `;
    card.addEventListener("click", () => {
      results.textContent = "";
      //results.classList.add("hidden");
      console.log(recipe);
      openRecipe(recipe);
    });
    const renderbtn = document.getElementById("renderAddBtn");
    renderbtn.addEventListener("click", () => addRecipe());
    gridContainer.appendChild(card);
    results.appendChild(gridContainer);
  });
}

function openRecipe(recipe) {
  const ingredients = arrayToHTML(recipe.ingredients);
  const instructions = arrayToHTML(recipe.instructions);
  const back = document.createElement("div");
  back.id = "back";
  back.className = "back-button";
  back.innerHTML = `<p>←Back</p>`;
  const selectedRecipe = document.createElement("div");
  selectedRecipe.id = "selectedRecipe";
  selectedRecipe.innerHTML = `
    <div class="recipeTitle">
      <h2 id="recipe-name">${recipe.name}</h2>
      <p id="cook-time"> ⌛️ ${recipe.prepTime} minutes</p>
    </div>
    <p id="description">${recipe.description}</p>
    <div id="recipe-info">
      <div id="cooking">
        <div id="ingredients-list">
          <h3>Ingredients</h3>
          <ul class="ingredients">${ingredients}</ul>
        </div>
        <div id="instructions">
          <h3>Instructions</h3>
          <ul class="instructions">${instructions}</ul>
        </div>
      </div>
    </div>
  `;

  recipeCard.appendChild(back);
  recipeCard.appendChild(selectedRecipe);

  back.addEventListener("click", () => {
    renderResults(myRecipes);
    recipeCard.textContent = "";
  });
}

function arrayToHTML(array) {
  let htmlText = "";
  for (let i = 0; i < array.length; i++) {
    htmlText += `
    <li>${array[i]}</li>
    `;
  }
  return htmlText;
}

function TextToArray(recipeText) {
  const array = recipeText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line);
  console.log(array);
}

renderResults(myRecipes);
