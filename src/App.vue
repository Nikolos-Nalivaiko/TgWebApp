<script>
export default {
  data() {
    return {
      // shortName: "NKLS",
      shortName: "____",
    };
  },
  mounted() {
    if (window.Telegram?.WebApp?.initDataUnsafe) {
      const data = window.Telegram.WebApp.initDataUnsafe;
      const name =
        data?.chat?.title ||
        data?.user?.username ||
        data?.user?.first_name ||
        "Guest";

      this.shortName = name.slice(0, 4).toUpperCase();
    } else {
      console.warn("Telegram WebApp не найден");
    }
  },
};
</script>

<template>
  <div class="app">
    <div class="header">
      <div class="container">
        <div class="header__block-wrapper">
          <div class="header__block">
            <div class="header__top">
              <h1>{{ shortName }}</h1>
              <span class="header__line"></span>
              <p class="header__subtitle">Active+</p>
            </div>
            <div class="header__bottom">
              <div class="header__active">
                <img
                  src="/icons/activeIcon.svg"
                  alt=""
                  class="header__active-icon"
                />
                <p class="header__active-name">IMX (91%)</p>
              </div>
              <!-- <p class="header__status">В работе</p> -->
              <p class="header__status header__status--stop">Остановлен</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="btns">
        <button class="btn btn--start">
          <img src="/icons/start.svg" alt="" class="btn__icon" />
          Запустить
        </button>
        <button class="btn btn--stop">
          <img src="/icons/stop.svg" alt="" class="btn__icon" />
          Остановить
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: #3c5cfd;
  height: 100px;
  position: relative;
}

.header__subtitle {
  font-weight: 700;
  color: #bdc2df;
}

.header__status {
  color: #3e7b27;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
}

.header__status::before {
  content: "";
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: #3e7b27;
  border-radius: 50%;
}

.header__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
}

.header__active {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header__status--stop {
  color: #ff0000;
}

.header__status--stop::before {
  background-color: #ff0000;
}

.header__top {
  display: flex;
  align-items: center;
  gap: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e2dad6;
}

.header__line {
  display: inline-block;
  height: 20px;
  width: 1px;
  background-color: #e2dad6;
}

.header__block {
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
}

.header__block-wrapper {
  max-width: 600px;
  padding-right: 20px;
  padding-left: 20px;
  position: absolute;
  width: 100%;
  top: 35px;
  left: 50%;
  transform: translateX(-50%);
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btns {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 125px;
}

.btn {
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.btn--start {
  color: #fff;
  background-color: #3c5cfd;
}

.btn--stop {
  color: #e52020;
  background-color: #fff;
}
</style>
