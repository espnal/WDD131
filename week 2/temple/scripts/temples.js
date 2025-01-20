const links = [
  { href: "#", text: "Home" },
  { href: "#", text: "Old" },
  { href: "#", text: "New" },
  { href: "#", text: "Large" },
  { href: "#", text: "Small" },
];
const createNav = (links) => {
  const ul = document.createElement("ul");
  links.forEach((link) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${link.href}">${link.text}</a>`;
    ul.appendChild(li);
  });
  return ul;
};
const nav = document.querySelector("nav");
nav.appendChild(createNav(links));

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  // Toggle menu and icon
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.innerHTML = navMenu.classList.contains("active")
      ? "&#10006;"
      : "&#9776;";
  });
});
