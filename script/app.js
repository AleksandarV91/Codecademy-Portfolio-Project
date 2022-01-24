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

/* form validation */
const form = document.getElementById("form");

/* addError */
const addError = (field, message) => {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");
  const small = form[field].parentNode.querySelector("small");
  small.innerText = message;
};

/* removeError */
const removeError = (field) => {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
  form[field].value = "";
};

/* regEx */
const isValid = (email) => {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(String(email).toLocaleLowerCase());
};

/* form function */
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fullName = form["name"].value;
  const email = form["email"].value;
  const phone = form["phone"].value;

  if (fullName === "") {
    addError("name", "Please enter your full name");
  } else {
    removeError("name");
  }
  if (email === "") {
    addError("email", "Email cannot be empty");
  } else if (!isValid(email)) {
    addError("email", "Looks like this is not an email");
  } else {
    removeError("email");
  }
  if (phone === "") {
    addError("phone", "Please enter your phone number");
  } else {
    removeError("phone");
  }
});

/* smooth scroll */

const navbar = document.getElementById("nav");
const linksContainer = document.querySelector(".nav-links");
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    let position = element.offsetTop - navHeight;

    if (navHeight > 100) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 100;
  });
});
