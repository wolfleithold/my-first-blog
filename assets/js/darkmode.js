document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("dark-mode-toggle");

  if (toggleButton) {
    console.log("Dark mode toggle button found.");

    toggleButton.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      console.log("Current body classes:", document.body.className);
    });
  } else {
    console.log("Dark mode toggle button not found.");
  }
});
