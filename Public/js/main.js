const toggleMenuBtn = document.getElementById("toggleMenu");
const toggleMenu = document.getElementById("menu");
const liTags = toggleMenu.querySelectorAll("li");

// function to trigger menu actions
toggleMenuBtn.addEventListener("click", () => {
  if (toggleMenu.classList.contains("active")) {
    toggleMenu.classList.remove("active");
  } else {
    toggleMenu.classList.add("active");
  }
});

// Change the active Menu

liTags.forEach((tag) => {
  tag.setAttribute("onclick", "changeActive(this)");
});

const changeActive = (element) => {
  // remove all the active class
  liTags.forEach((tag) => {
    tag.querySelector("a").classList.remove("active");
  });

  // add active class for current li
  element.querySelector("a").classList.add("active");
  toggleMenu.classList.remove("active");
};
