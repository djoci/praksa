<template>
  <div class="body">
    <div class="container-fluid">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container">
          <router-link to="/" class="navbar-brand"><img src="../assets/img/demo.svg" alt></router-link>
        </div>
      </nav>
    </div>

    <div class="container">
      <div class="cover-container">
        <main>
          <h1 class="cover-heading">Thanks for Using Our Service!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara.
            Another
            projects managed with a easy design is what we stand for.incididunt ugt labore.
          </p>
          <router-link to="/Login" class="btn btn-primary btn-xl">LET'S START</router-link>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Thanks",
  props: {
    msg: String
  }
};
</script>

<style scoped>
html,
template,
.body {
  height: 100vh;
  min-height: 100%;
}

.body {
  background: url(../assets/img/oblaci.svg), url(../assets/img/raketa.svg),
    url(../assets/img/oblakbeli.png), url(../assets/img/zvezde.svg);
  background-size: 98% auto, auto 75%, 50% auto, 35% auto;
  background-repeat: no-repeat;
  background-position: 0% 10%, 79% 100%, 99% 100%, 85% 15%;
  background-color: #202646;
  animation-name: oblak;
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

@keyframes oblak {
  from {
    background-position: 0% 10%, 79% 90%, 99% 100%, 85% 15%;
  }

  to {
    background-position: 30% 10%, 79% 85%, 99% 102%, 85% 15%;
  }
}

h1 {
  word-spacing: 10px;
}

p {
  margin-bottom: 20px;
}

.cover-container {
  max-width: 42em;
  padding-top: 120px;
}

.btn-primary {
  width: 240px;
  font-size: 20px;
  font-weight: 700;
}

.btn-primary:hover,
.btn-primary,
.btn-primary:focus,
.btn-primary:active {
  border-radius: 38px;
}

.body,
.cover-heading {
  color: #fff;
}

@media (max-width: 575.98px) {
  .cover-container {
    padding-top: 60px;
  }

  .body {
    background: url(../assets/img/oblaci.svg), url(../assets/img/zvezde.svg);
    background-size: 98% auto, 80% auto;
    background-position: 0% 10%, 10% 15%;
    background-repeat: no-repeat;
    background-color: #202646;
  }

  @keyframes oblak {
    from {
      background-position: 0% 10, 10% 15%;
    }

    to {
      background-position: 30% 10%, 10% 15%;
    }
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  main {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 20px;
  }

  .btn-primary {
    width: 180px;
    font-size: 18px;
  }

  h1 {
    font-size: 30px;
  }

  .body {
    background-size: 98% auto, auto 75%, 60% auto, 35% auto;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  h1 {
    font-size: 30px;
  }

  main p {
    width: 80%;
  }

  .body {
    background-size: 98% auto, auto 75%, 50% auto, 35% auto;
    background-position: 0% 10%, 79% 95%, 99% 100%, 85% 15%;
  }

  @keyframes oblak {
    from {
      background-position: 0% 10%, 79% 100%, 99% 100%, 85% 15%;
    }

    to {
      background-position: 30% 10%, 79% 99%, 99% 102%, 85% 15%;
    }
  }
}
</style>