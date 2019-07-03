<template>
  <div class="body">
    <div class="container-fluid">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container">
          <router-link to="/" class="navbar-brand"><img src="../assets/img/demo.svg" alt></router-link>
        </div>
      </nav>
    </div>
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main class="inner cover text-center">
        <img src="../assets/img/letter.svg" alt class="new-let">
        <h1 class="cover-heading">New Password is Sent to You</h1>
        <p>Please do check it, and continue with using our service</p>
        <a class="btn btn-primary btn-xl" type="submit">SIGN IN</a>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewPass",
  props: {
    msg: String
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
h1 {
  margin-top: 20px;
}
.cover-container {
  max-width: 50em;
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

.body,
.cover-heading {
  color: #fff;
}
@media (max-width: 767px) {
  .new-let {
    margin-top: 20px;
  }
}
@media (min-width: 768px) {
  .new-let {
    margin-top: 60px;
  }
}
</style>