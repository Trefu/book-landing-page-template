const toggleBtn = document.getElementById("toggleBtn");
const mobileMenu = document.getElementById("mobileMenu");
const VERSE_HEADER = document.getElementById("verse");
const navToggle = document.getElementsByClassName("toggle");

toggleBtn.addEventListener("click", () => {

  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");
  }
  mobileMenu.classList.toggle("transform");
});

const BTNS_NAVBAR = document.getElementsByClassName("btn-navbar");

Array.from(BTNS_NAVBAR).forEach((el) => {
  el.addEventListener("click", () => {
    toggleBtn.click()
  })
});



const fadeOutHeader = () => {
  setTimeout(() => {
    VERSE_HEADER.classList.add("opacity-0");
    setTimeout(() => {
      VERSE_HEADER.textContent =
        '" Produciendo una veta en ellas y a la tinta al fin llegar "';
      VERSE_HEADER.classList.remove("opacity-0");
      VERSE_HEADER.classList.remove("transform")
    }, 1000);
  }, 4500);
};

const init = () => {
  document.body.classList.remove("overflow-hidden");
  const loader = document.getElementById("loading");
  loader.remove();
  if (VERSE_HEADER) {
    fadeOutHeader();
  }
};
document.onload = init();