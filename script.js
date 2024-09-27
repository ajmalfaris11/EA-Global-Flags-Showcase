document.addEventListener("DOMContentLoaded", () => {
  const countriesContainer = document.getElementById("countries-container");

  // Fetch countries data
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((countries) => {
      countries.forEach((country) => {
        // Create a card for each country
        const countryCard = document.createElement("div");
        countryCard.classList.add("country-card");

        // Set the content of the card
        countryCard.innerHTML = `
          <h2>${country.name.common}</h2>
          <img src="${country.flags.svg}" alt="Flag of ${country.name.common}">
        `;

        // Append the card to the container
        countriesContainer.appendChild(countryCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching country data:", error);
      countriesContainer.innerHTML =
        "<p>Failed to load country data. Please try again later.</p>";
    });
});
