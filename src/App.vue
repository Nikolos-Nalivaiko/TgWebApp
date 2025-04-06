<template>
  <div class="app">
    <div class="header">
      <div class="container">
        <div class="header__block">
          <div class="header__top">
            <h1>NKLS</h1>
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
            <p class="header__status">Активный</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.header {
  background-color: #3c5cfd;
  height: 100px;
  position: relative;

  &__subtitle {
    font-weight: 700;
    color: #bdc2df;
  }

  &__status {
    color: #3e7b27;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;

    &::before {
      content: "";
      display: inline-block;
      width: 5px;
      height: 5px;
      background-color: #3e7b27;
      border-radius: 50%;
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
  }

  &__active {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__top {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #e2dad6;
  }

  &__line {
    display: inline-block;
    height: 20px;
    width: 1px;
    background-color: #e2dad6;
  }

  &__block {
    padding: 20px;
    background-color: #fff;
    border-radius: 15px;
    position: absolute;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 320px;
    width: 100%;
  }
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
