const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Palmyra ",
    location: "New York, United States",
    dedicated: "  2000, April, 6",
    area: 10900,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/077-Palmyra-New-York-Temple.jpg",
  },
  {
    templeName: "Bogotá",
    location: " Distrito Capital, Colombia",
    dedicated: "  1984, April , 7",
    area: 53500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg",
  },
  {
    templeName: "Santo Domingo",
    location: "Distrito Nacional, Dominican Republic",
    dedicated: "  2000,  September, 17",
    area: 67000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-1444-main.jpg",
  },
];
const links = [
  { id: "home", text: "Home", href: "#" },
  { id: "old", text: "Old", href: "#" },
  { id: "new", text: "New", href: "#" },
  { id: "large", text: "Large", href: "#" },
  { id: "small", text: "Small", href: "#" },
];

const createCard = (temples, event) => {
  let filteredTemples;

  switch (event.target.id) {
    case "old":
      filteredTemples = temples.filter(
        (t) => parseInt(t.dedicated.split(",")[0]) < 1900
      );
      break;
    case "new":
      filteredTemples = temples.filter(
        (t) => parseInt(t.dedicated.split(",")[0]) > 2000
      );
      break;
    case "large":
      filteredTemples = temples.filter((t) => t.area > 90000);
      break;
    case "small":
      filteredTemples = temples.filter((t) => t.area < 10000);
      break;
    case "home":
    default:
      filteredTemples = temples;
      break;
  }

  const divCard = document.querySelector(".figure-cont");
  divCard.innerHTML = "";

  filteredTemples.forEach((temple) => {
    const figureCard = document.createElement("div");
    figureCard.classList.add("figureCard");
    const figure = document.createElement("figure");

    const caption = document.createElement("div");
    caption.classList.add("caption");
    caption.innerHTML = `<h2>${temple.templeName}</h2> <p>${temple.location}</p><p>${temple.dedicated}</p><p>${temple.area}</p>`;
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.width = "280";
    img.height = "210";
    img.loading = "lazy";

    // const caption = document.createElement("figcaption");
    // caption.textContent = `${temple.templeName} - ${temple.location}`;
    // figureCard.appendChild(caption);
    figure.appendChild(caption);
    figure.appendChild(img);
    figureCard.appendChild(figure);
    divCard.appendChild(figureCard);
  });
};

const createNav = (links) => {
  const ul = document.createElement("ul");
  links.forEach((link) => {
    const li = document.createElement("li");
    li.innerHTML = `<a id='${link.id}' href="${link.href}">${link.text}</a>`;
    ul.appendChild(li);
  });
  return ul;
};
const nav = document.querySelector("nav");
nav.appendChild(createNav(links));

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  // const figureCont = document.querySelector(".figure-cont");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  createCard(temples, { target: { id: "home" } });

  nav.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (link) {
      event.preventDefault();
      createCard(temples, event);
    }
  });

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.innerHTML = navMenu.classList.contains("active")
      ? "&#10006;"
      : "&#9776;";
  });
});
