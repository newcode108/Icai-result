// Generate random captcha
function generateCaptcha() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  return captcha;
}

// Set captcha on load
const captchaBox = document.querySelector(".captcha-box");
captchaBox.textContent = generateCaptcha();

document.getElementById("resultForm").addEventListener("submit", function (e) {
  e.preventDefault();
  this.style.opacity = "0.6";
  this.querySelector(".submit").textContent = "Loading...";
  setTimeout(() => {
    this.classList.add("hidden");
    document.getElementById("errorScreen").classList.remove("hidden");
  }, 1000);
});

// Home button to reload page
document.getElementById("homeBtn").addEventListener("click", () => {
  window.location.reload();
});
