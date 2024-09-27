document.addEventListener("DOMContentLoaded", () => {
  const countriesContainer = document.getElementById("countries-container");


   // Fetch countries data
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((countries) => {
      // Processing countries data here
    })
    .catch((error) => {
      console.error("Error fetching country data:", error);
      countriesContainer.innerHTML =
        "<p>Failed to load country data. Please try again later.</p>";
    });
});
