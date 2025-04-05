document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("settings-form");

  // Перевіримо, що Telegram WebApp доступний
  if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.expand(); // зробити панель повноекранною
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      asset: document.getElementById("asset").value.trim(),
      assetId: document.getElementById("asset-id").value.trim(),
      assetType: document.getElementById("asset-type").value.trim(),
      stake: document.getElementById("stake").value.trim(),
    };

    // Мінімальна валідація
    if (!data.asset || !data.assetId || !data.assetType || !data.stake) {
      alert("Будь ласка, заповни всі поля");
      return;
    }

    // Надсилаємо дані у Telegram бота
    if (Telegram.WebApp) {
      Telegram.WebApp.sendData(JSON.stringify(data));
      Telegram.WebApp.close(); // Закриває WebApp
    } else {
      alert("Telegram WebApp недоступний");
    }
  });
});
