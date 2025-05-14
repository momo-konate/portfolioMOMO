let countdown = 5;
const countdownElement = document.getElementById('countdown');

const interval = setInterval(() => {
  countdown--;
  countdownElement.textContent = countdown;
  
  if (countdown <= 0) {
    clearInterval(interval);
    window.location.href = "http://127.0.0.1:5500/";
  }
}, 1000);