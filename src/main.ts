import "./style.css";

const backToTopButton = document.getElementById(
  "backToTop",
) as HTMLButtonElement;
const homeSection = document.getElementById("homeSection") as HTMLElement;

window.addEventListener("scroll", () => {
  if (window.scrollY > homeSection.offsetHeight) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  homeSection.scrollIntoView({ behavior: "smooth" });
});
