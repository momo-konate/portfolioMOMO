let countdown = 5;
const countdownElement = document.getElementById('countdown');

const interval = setInterval(() => {
  countdown--;
  countdownElement.textContent = countdown;
  
  if (countdown <= 0) {
    clearInterval(interval);
    window.location.href = "https://momo-konate.github.io/portfolioMOMO/";
  }
}, 1000);
