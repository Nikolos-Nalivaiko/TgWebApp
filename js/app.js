document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");

  if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.expand();

    startBtn.addEventListener("click", () => {
      Telegram.WebApp.sendData(JSON.stringify({ action: "start" }));
      Telegram.WebApp.close();
    });
  } else {
    alert("Telegram WebApp не поддерживается");
  }
});
