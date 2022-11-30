const suggestBtn = document.querySelector(".host-suggest");

function backColorChange(){
    suggestBtn.classList.toggle("background-grey")
}
suggestBtn.addEventListener("mouseover", backColorChange)

const registerBtn = document.querySelector(".register")

function registerShadow(){
    registerBtn.classList.toggle("addShadow")
}

registerBtn.addEventListener("mouseover", registerShadow)



const categoryBtn = document.querySelectorAll(".main-category > button")


function bottomLine(){
    categoryBtn[1].classList.toggle("addBottomLine")
}

categoryBtn[1].addEventListener("mouseover", bottomLine)


