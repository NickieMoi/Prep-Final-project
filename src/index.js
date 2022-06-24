const linkUrl = "http://localhost:3000/categories";
const meal = document.getElementById("name");
const image = document.getElementById("img");
const Description = document.getElementById("detailed-info");
const menu2 = document.getElementById("menu1");

function foodDisplay(foodDescription) {
  meal.innerText = foodDescription.strCategory;
  image.src = foodDescription.strCategoryThumb;
  Description.innerText = foodDescription.strCategoryDescription;
}

fetch(linkUrl)
  .then((response) => response.json())
  .then((jsonData) => {
    foodDisplay(jsonData[1]);
    menuDisplay(jsonData);
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


  