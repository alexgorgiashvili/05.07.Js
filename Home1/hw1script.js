let togg = document.querySelector(".burger");
let items = document.querySelector(".textinn")
togg.addEventListener("click", function (){
  togg.classList.toggle("change")
  items.classList.toggle("textout")

})

