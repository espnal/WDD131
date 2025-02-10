const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector("#product");
  if (!select) return;

  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
      localStorage.setItem("reviewSubmitted", "true");

      window.location.href = "review.html";
    } else {
      alert("Please complete all required fields.");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("reviewSubmitted") === "true") {
    let reviewCount = localStorage.getItem("reviewCount") || 0;

    reviewCount = parseInt(reviewCount) + 1;

    localStorage.setItem("reviewCount", reviewCount);

    document.getElementById("reviewCount").textContent = reviewCount;

    localStorage.removeItem("reviewSubmitted");
  } else {
    document.getElementById("reviewCount").textContent =
      localStorage.getItem("reviewCount") || 0;
  }
});
