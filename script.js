"use strict";

const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger-icon");
const hamburgerIcon = document.getElementById("hamburger");
const nav = document.querySelector(".menu");

const secAbout = document.querySelector(".about");
const secSince = document.querySelector(".since");
const imgAbout = document.querySelector(".translated-left");
const imgSince = document.querySelector(".translated-right");

// Header changing color on scroll
window.onscroll = function () {
  let start = window.scrollY;
  if (start >= 1) {
    header.classList.add("header-onscroll");
  } else {
    header.classList.remove("header-onscroll");
  }
};

// Image move in

// From left
const moveInImgLeft = function (entries) {
  const [entry] = entries;
  // console.log(entry.isIntersecting);
  if (entry.isIntersecting) {
    imgAbout.classList.remove("translated-left");
  }
};

const imageObserverLeft = new IntersectionObserver(moveInImgLeft, {
  root: null,
  threshold: 0.15,
});

imageObserverLeft.observe(secAbout);

// From right
const moveInImgRight = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    imgSince.classList.remove("translated-right");
  }
};

const imageObserverRight = new IntersectionObserver(moveInImgRight, {
  root: null,
  threshold: 0.15,
});

imageObserverRight.observe(secSince);

// Mobile menu in
hamburger.addEventListener("click", function () {
  nav.classList.toggle("show-menu");
  // header.classList.toggle("head-background-black");
  hamburgerIcon.classList.toggle("fa-bars-active");
});
