
let headerBtn = document.querySelector(".header-btn")
console.log(headerBtn)
headerBtn.addEventListener('click', function (event) {
  let btnPush = event.target
  if (btnPush.tagName === "A") {
    btnPush.classList.add('hvr-push')
    removePush(btnPush)
  }

})
function removePush(btnPush) {
  btnPush.addEventListener("animationend", function () {
    console.log("finish")
    btnPush.classList.remove("hvr-push")
  })
}



let headerBar = document.querySelector('.fa-solid')
let nav = document.querySelector('.nav')

headerBar.addEventListener('click', function (event) {

  let barEvent = event.target

  if (barEvent.classList.contains('fa-bars')) {
    barEvent.classList.remove('fa-bars')
    barEvent.classList.add('fa-xmark')
    nav.style.display = "block"

  } else {
    barEvent.classList.remove('fa-xmark')
    barEvent.classList.add('fa-bars')
    nav.style.display = "none"
  }

}
)

/*
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var y = document.querySelector(".container");
y.innerHTML = "Browser Window: width: " + windowWidth + ", height: " + windowHeight + ".";
console.log(windowWidth)*/