const MenuBar = document.getElementById("Menu-bar")
const form =document.getElementById("comment-form")
const image = document.getElementsByTagName("img")
const  text = document.getElementById("comment")
const linkUrl = "http://localhost:3000/categories"
const submit =document.getElementById("submit")
fetch(linkUrl)
    .then(response => response.json())
    .then(jsonData => {}
    )
        

