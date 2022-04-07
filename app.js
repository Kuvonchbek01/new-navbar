const hiddennav = document.querySelector(".hiddennav");
const shownav = document.querySelector(".shownav");
const btn = document.querySelector(".menu-link");
const overlay = document.querySelector(".overlay");
const hidden = document.querySelector(".hidden");

btn.addEventListener("click", () => {
  hiddennav.classList.toggle("shownav");
  overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
  hiddennav.classList.toggle("shownav");
  overlay.classList.toggle("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    hiddennav.classList.toggle("shownav");
    overlay.classList.toggle("hidden");
  }
});

window.addEventListener('resize', function(){
    if(window.innerWidth > 500){
        hiddennav.classList.remove('shownav')
        overlay.classList.remove('hidden')
    }
})
