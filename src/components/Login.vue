<template>
  <div class="body">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main class="inner cover text-center">
        <h1 class="cover-heading">
          <router-link to="/" class="navbar-brand"><img src="../assets/img/demo.svg" alt></router-link>
        </h1>
        <form @submit.prevent="login">
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
          <button id="loginButton" class="btn btn-primary btn-xl" type="submit">SIGN IN</button>
        </form>
        <p>
          <router-link to="/Forgot">Forgot password?</router-link>Or you you don't have an account
          <span>
            <router-link to="/Register">Click Here!</router-link>
          </span>
        </p>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: false
    };
  },
  methods: {
    login() {
      this.$http
        .post("/auth/login", { email: this.email, password: this.password })
        .then(request => {
          this.loginSuccessful(request);
          console.log(request);
        })

        .catch(() => this.loginFailed());
    },
    loginSuccessful(req) {
      if (!req.data.access_token) {
        this.loginFailed();
        return;
      }
      localStorage.token = req.data.access_token;
      console.log(localStorage.token);

      this.error = false;
      this.$router.replace(this.$route.query.redirect || "/users");
    },
    loginFailed() {
      this.error = "Login failed!";
      delete localStorage.token;
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
  color: #fff;
}
.cover-container {
  max-width: 42em;
}
.form-control::placeholder,
main span a,
main span a:hover {
  color: #29e4b7;
}

.btn-primary {
  width: 240px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}
.form-control,
.btn-primary:hover,
.btn-primary,
.btn-primary:focus,
.btn-primary:active {
  border-radius: 38px;
}
</style>