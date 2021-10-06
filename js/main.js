const toggleMenuBtn = document.getElementById("toggleMenu");
const toggleMenu = document.getElementById("menu");

// function to trigger menu actions
toggleMenuBtn.addEventListener("click", () => {
  if (toggleMenu.classList.contains("active")) {
    toggleMenu.classList.remove("active");
  } else {
    toggleMenu.classList.add("active");
  }
});
