// Creating a responsive nav-bar comp0nent

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("hi");
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());


// Creating a portfoilo tabbed component


const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) => {
    curElem.classList.remove("p-btn-active");
  });

  p_btn_clicked.classList.add("p-btn-active");

  // Get the value of btn_num from the dataset
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num); // Use console.log without quotes to log the value

  // Create a valid selector using string interpolation
  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));
  img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
});
