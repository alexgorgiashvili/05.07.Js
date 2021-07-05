let eye = document.querySelector(".btn2")
let seceye = document.querySelector(".bi-eye-fill")
let inpp = document.querySelector(".inp")
eye.addEventListener("click", function (event){
  event.preventDefault();
  seceye.classList.toggle("bi-eye-slash-fill");
  if (inpp.type == "password"){
    inpp.type = "text"
  }else{
    inpp.type = "password"
  }
})

