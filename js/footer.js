window.onload = function () {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Update the year in the footer
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = currentYear;
  } else {
    console.error("Element with ID 'year' not found.");
  }
};