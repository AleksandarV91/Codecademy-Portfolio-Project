/* mobile nav links */
const toggleBtn = document.querySelector(".nav-toggle");
const mobileLinks = document.querySelector(".nav-links");

/* open/close links */
toggleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const navBtn = document.querySelector(".btn");
  const open = "images/bars-solid.svg";
  const close = "images/times-solid.svg";
  if (mobileLinks.classList.contains("show")) {
    navBtn.src = open;
    mobileLinks.classList.remove("show");
  } else {
    navBtn.src = close;
    mobileLinks.classList.add("show");
  }
});
