const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// alert("Are you ready to accept the layers into your life?");
// alert("Are you sure, there are many layers involved");
// alert(
//   "If you clicked ok to the last two layers, you now have a virus that gives me all your money. How's that for a layer..."
// );
