const links = document.querySelector(".nav .link-contant");
const icon = document.querySelector(".nav .links i");

icon.addEventListener("click", () => {
  links.classList.toggle("disaper");
});
links.addEventListener("mouseleave", () => {
  links.classList.add("disaper");
});
