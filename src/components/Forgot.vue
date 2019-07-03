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
          <h1 class="cover-heading">Forgot your password?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara. Another
            projects managed.
          </p>
          <form @submit.prevent="mypassword">
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
            <div class="form-group">
              <label for="inputEmail" class="sr-only">Email address</label>
              <input
                v-model="email"
                type="email"
                id="inputEmail"
                class="form-control text-center"
                placeholder="Email address"
                required
                autofocus
              >
            </div>
            <button id="emailButton" class="btn btn-primary btn-xl" type="submit">Send</button>
          </form>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Forgot",
  data() {
    return {
      email: "",
      error: false
    };
  },
  methods: {
    mypassword() {
      this.$http
        .post("/auth/login", { email: this.email })
        .then(request => {
          this.passSuccessful(request);
          console.log(request);
        })

        .catch(() => this.passFailed());
    },
    passSuccessful(req) {
      this.error = false;
      this.$router.replace(this.$route.query.redirect || "/NewPass");
    },
    passFailed() {
      this.error = "Your email is not registered!";
    }
  }
};
</script>

<style scoped>
.body {
  background-color: #202646;
  background-image: url("../assets/img/belioblakucossku.svg");
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 50% auto;
  min-height: 100vh;
}

.cover-container {
  max-width: 42em;
}
.form-control::placeholder {
  color: #29e4b7;
}
.btn-primary {
  width: 240px;
  font-size: 20px;
  font-weight: 700;
}
.form-control,
.btn-primary:hover,
.btn-primary,
.btn-primary:focus,
.btn-primary:active {
  border-radius: 38px;
}
.form-control {
  width: 60%;
}
.body,
.cover-heading {
  color: #fff;
}
@media (max-width: 576px) {
  .form-control,
  .btn-primary {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .cover-container {
    max-width: 100%;
    padding: 1em;
  }
}
</style>