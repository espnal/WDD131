const motivationalQuotes = {
  quotes: [
    {
      text: "Believe you can and you're halfway there. - Theodore Roosevelt",
      image: "images/believe.jpg",
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      image: "images/failure.jpg",
    },
    {
      text: "Your limitation—it's only your imagination.",
      image: "images/imagination.jpg",
    },
    {
      text: "Opportunities don’t happen. You create them. - Chris Grosser",
      image: "images/Opportunities.jpg",
    },
    {
      text: "Dream big and dare to fail. - Norman Vaughan",
      image: "images/dare-to-fail.jpg",
    },
    {
      text: "It always seems impossible until it’s done. - Nelson Mandela",
      image: "images/impossible.jpg",
    },
    {
      text: "Push yourself, because no one else will do it for you.",
      image: "images/Push-yourself.jpg",
    },
    {
      text: "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
      image: "images/clock.jpg",
    },
  ],
};
function displayRandomQuote() {
  const quoteContainer = document.getElementById("quote-container");
  const quoteImage = document.getElementById("quote-image");
  const quoteText = document.getElementById("quote-text");

  if (!quoteText) {
    console.error("Element with ID 'quote-text' not found!");
    return;
  }

  const randomIndex = Math.floor(
    Math.random() * motivationalQuotes.quotes.length
  );
  const randomQuote = motivationalQuotes.quotes[randomIndex];

  quoteText.textContent = randomQuote.text;
  quoteImage.src = randomQuote.image;
  quoteImage.alt = "Motivational image";
  quoteImage.width = "900";
}
function saveFavoriteQuote() {
  const quoteText = document.getElementById("quote-text").textContent;
  if (quoteText) {
    let favoriteQuotes =
      JSON.parse(localStorage.getItem("favoriteQuotes")) || [];
    favoriteQuotes.push(quoteText);
    localStorage.setItem("favoriteQuotes", JSON.stringify(favoriteQuotes));
    alert("Quote saved as favorite!");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const favoritesContainer = document.getElementById("favorites-container");

  function loadFavoriteQuotes() {
    const favoriteQuotes =
      JSON.parse(localStorage.getItem("favoriteQuotes")) || [];
    favoritesContainer.innerHTML = "";

    if (favoriteQuotes.length === 0) {
      favoritesContainer.innerHTML = "<p>No favorite quotes yet.</p>";
      return;
    }

    favoriteQuotes.forEach((quote, index) => {
      const quoteElement = document.createElement("div");
      quoteElement.classList.add("quote-card");
      quoteElement.innerHTML = `
        <p class="favorite">${quote}</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
      `;
      favoritesContainer.appendChild(quoteElement);
    });
  }

  favoritesContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) {
      const index = event.target.getAttribute("data-index");
      let favoriteQuotes =
        JSON.parse(localStorage.getItem("favoriteQuotes")) || [];
      favoriteQuotes.splice(index, 1);
      localStorage.setItem("favoriteQuotes", JSON.stringify(favoriteQuotes));
      loadFavoriteQuotes();
    }
  });

  loadFavoriteQuotes();
});

document.addEventListener("DOMContentLoaded", displayRandomQuote);
// document.addEventListener("DOMContentLoaded", saveFavoriteQuote);

document.addEventListener("DOMContentLoaded", function () {
  const lastModifiedElement = document.getElementById("lastModified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = "Last modified: " + document.lastModified;
  } else {
    console.error("Element with ID 'lastModified' not found.");
  }
});
