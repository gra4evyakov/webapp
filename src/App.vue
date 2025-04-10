<template>
  <div class="home">
    <section class="home__section home__section-hero">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        numquam.
      </p>
      <h1>Consectetur</h1>
      <button class="home__section-button">Lorem ipsum dolor sit.</button>
      <button class="home__section-button">
        Lorem ipsum, dolor sit amet consectetur adipisicing.
      </button>
    </section>

    <section class="home__section home__section-info">
      <h1>Lorem.</h1>
      <a class="home__section-button">Lorem ipsum dolor sit.</a>
    </section>
  </div>
</template>

<style scoped>
.home {
  height: 100dvh;
  overflow-y: scroll;
  overflow-x: hidden;

  scroll-snap-type: y mandatory;
  color: black;
}

.home__section {
  padding: 16px;
  scroll-snap-align: start;
  height: 90dvh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 16px;
    font-weight: 500;
  }

  h1 {
    font-size: 60px;
    font-weight: 700;
  }
}

.home__section-hero {
  background: #fee5e1 url("/background.png") center/cover no-repeat;
}

.home__section-info {
  background-color: #c3d6ff;
}

.home__section-button {
  width: 100%;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #000;
  color: white;
  font-size: 20px;
  transition-duration: 0.3s;
}

.home__section-button:active {
  background-color: #333;
  scale: 0.95;
}
</style>
