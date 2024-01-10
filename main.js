document.addEventListener("DOMContentLoaded", function () {
  // Simulate content loading delay (you can replace this with your actual content loading logic)
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 3000); // Change 2000 to your desired delay in milliseconds
});


let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
  navbar.classList.toggle('active');
  menu.classList.toggle('move');
}

let bell = document.querySelector('.notification');
document.querySelector('#bell-icon').onclick = () =>{
  bell.classList.toggle('active');
}

//slider

