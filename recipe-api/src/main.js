import axios from "axios";

const API_URL = "https://tasty.p.rapidapi.com/recipes/list";

const status = document.getElementById("status");
const results = document.getElementById("results");
const form = document.getElementById("search");
const searchInput = document.getElementById("searchInput");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  status.textContent = "loading...";
  try {
    const recipes = await axios.get(API_URL, {
      params: {
        q: `${searchInput.value}`,
      },
      headers: {
        "x-rapidapi-key": "1dc86e1e0bmsh790172234587322p1bf0b2jsneea7261b7b43",
      },
    });

    console.log(recipes);
    status.textContent = "";
    results.textContent = "";
    renderResults(recipes.data.results);
  } catch (error) {
    status.textContent = "Oops... something went wrong. Try again later.";
  }
});

// console.log(test);
// const recipe = document.getElementById("app");
// let test2 = "";
// for (let index = 0; index < test.data.results.length; index++) {
//   test2 += `
//   <div>
//     <img src="${test.data.results[index].thumbnail_url}" />
//   </div>
//   `;
// }

// recipe.innerHTML = test2;

function renderResults(recipes) {
  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${recipe.thumbnail_url}" alt="" />
      <div class="recipe-info">
        <div class="recipe-title"><h2>${recipe.name}</h2></div>
        <div class="details">
          <div class="cook-time">⌛️ ${recipe.total_time_minutes} minutes</div>
          <div class="description">${recipe.description}</div>
        </div>
    </div>
    `;
    card.addEventListener("click", () => {
      results.textContent = "";
      console.log(recipe);
      // openRecipe(recipe);
    });

    results.appendChild(card);
  });
}

function openRecipe(recipe) {
  const ingredients = ingredientsToHTML(recipe.sections[0].components);
  const instuctions = instructionsToHTML(recipe.instuctions);

  results.textContent = `
  <div id="selected-recipe">
        <img src="${recipe.thumbnail_url}" alt="" />
        <h2 id="recipe-name">${recipe.name}</h2>
        <p id="description">${recipe.description}</p>
        <p id="ratings"></p>
        <p id="servings"></p>
        <p id="cook-time">⌛️ ${recipe.total_time_minutes} minutes</p>
        <div id="recipe-info">
          <div id="cooking">
            <div id="ingredients-list"></div>
            <div id="instructions"></div>
          </div>
          <div id="nutrition"></div>
        </div>
      </div>
  `;
}

// https://rapidapi.com/apidojo/api/tasty/playground/apiendpoint_abf1bbc2-d08d-462b-b733-17392192ca46

function ingredientsToHTML(ingredients) {
  let htmlText = `<ul>`;
  for (let index = 0; index < ingredients.length; index++) {
    if (ingredients.raw_text) {
      if (raw_text === "") {
        //.....
      }
      //...
    }
    htmlText += `
      </
    `;
  }
}

function instructionsToHTML(instructions) {
  let htmlText = "<ul>";
  for (let index = 0; index < ingredients.length; index++) {
    htmlText += `
    <li>
      
    `;
  }
}
