document.addEventListener("DOMContentLoaded", function () {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Update the year in the footer
  document.getElementById("year").textContent = currentYear;
});