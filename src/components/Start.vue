<template>
  <div class="pocetak">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <router-link to="/" class="navbar-brand"><img src="../assets/img/demo.svg" alt></router-link>
          <!-- <a class="navbar-brand" href="./components/Start.vue">
            <img src="../assets/img/demo.svg" alt>
          </a> -->
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about" v-smooth-scroll>About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#features" v-smooth-scroll>Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pricing" v-smooth-scroll>Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#screenshot" v-smooth-scroll>Screeshot</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact" v-smooth-scroll>Contact</a>
              </li>
            </ul>
            <div class="btn my-2 my-sm-0">
              <router-link to="/Login" class="log">Login</router-link>&nbsp;
              <router-link to="/Register" class="reg">
                or
                Register
              </router-link>
            </div>
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="row part1">
          <div class="d-none d-md-block col-md-5">
            <div class="mobilni-telefon">
              <img src="../assets/img/mob.png" alt class="img-fluid">
            </div>
          </div>
          <div class="col-sm-12 col-md-7 text-right">
            <h1>The Best App to Increase Your Productivity</h1>
            <p class="lead">
              A mobile app is a computer program designed to run on a
              mobile device such as a phone/tablet or watch.
            </p>
            <a href="#" class="btn mr-2 my-2 my-sm-0 jab">
              <span class="small">Get It From</span>
              <span class="text-right d-block">Appstore</span>
            </a>
            <a href="#" class="btn mr-2 my-2 my-sm-0 dug">
              <span class="small">Get It From</span>
              <span class="text-right d-block">Playstore</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Start",
  props: {
    msg: String
  }
};
</script>
