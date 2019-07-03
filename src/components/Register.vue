<template>
  <div class="body">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main class="inner cover text-center">
        <h1 class="cover-heading">
          <router-link to="/" class="navbar-brand"><img src="../assets/img/demo.svg" alt></router-link>
        </h1>
        <form class="form-signin" @submit.prevent="signup">
          <div class="form-group">
            <label for="inputEmail" class="sr-only">Name</label>
            <input
              v-model="name"
              type="text"
              id="inputName"
              class="form-control text-center"
              placeholder="Name"
              required
              autofocus
            >
          </div>
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
          <div class="form-group">
            <label for="inputPassword" class="sr-only">Password</label>
            <input
              v-model="password"
              type="password"
              id="inputPassword"
              class="form-control text-center"
              placeholder="Password"
              required
            >
          </div>
          <div class="form-group">
            <label for="inputPassword" class="sr-only">Repeat Password</label>
            <input
              v-model="confirmedPassword"
              type="password"
              id="repeatPassword"
              class="form-control text-center"
              placeholder="Repeat password"
              required
            >
          </div>
          <button id="registerButton" class="btn btn-primary btn-xl" type="submit">Register</button>
        </form>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmedPassword: ""
    };
  },
  methods: {
    signup() {
      this.$http
        .post("/auth/signup", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmedPassword
        })
        .then(request => this.signupSuccessful(request))
        .catch(() => this.signupFailed());
    },
    signupSuccessful() {
      this.$router.replace(this.$route.query.redirect || "/Thanks");
    },
    signupFailed() {
      this.error = "Sign Up failed!";
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
  height: 100vh;
  color: #fff;
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
</style>