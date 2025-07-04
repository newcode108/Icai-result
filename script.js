document.getElementById("resultForm").addEventListener("submit", function (e) {
  e.preventDefault();
  this.style.opacity = "0.6";
  this.querySelector(".submit").textContent = "Loading...";
  setTimeout(() => {
    this.classList.add("hidden");
    document.getElementById("errorScreen").classList.remove("hidden");
  }, 1000);
});
