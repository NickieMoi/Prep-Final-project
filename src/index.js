const linkUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=f";
const meal = document.getElementById("name");
const image = document.getElementById("img");
const Description = document.getElementById("detailed-info");
const menu2 = document.getElementById("menu1");

function foodDisplay(foodDescription) {
  meal.innerText = foodDescription.strMeal;
  image.src = foodDescription.strMealThumb;
  Description.innerText = foodDescription.strInstructions;
}

fetch(linkUrl)
  .then((response) => response.json())
  .then((jsonData) => {
    foodDisplay(jsonData.meals[1]);
    menuDisplay(jsonData.meals);
  });

function menuDisplay(delicacies) {
  delicacies.forEach((foodDescription) => {
    const li = document.createElement("li");
    li.className = "delicacie";
    li.innerText = foodDescription.strCategory;
    menu2.append(li);
    li.addEventListener("click", () => {
      foodDisplay(foodDescription);
    });
  });
}

document
  .getElementById("comment-form")
  .addEventListener("click", function (event) {
    event.preventDefault();

    function addComment() {
      let Name = document.getElementById("addcomment1").value;
      document.getElementById("addcomment").innerHTML += Name;
    }
    addComment();
  });
