<template>
    <!-- The Modal -->
    <div class="modal fade" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Add user</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <form class="form-signin" @submit.prevent="signup" id="addUsers">
              <div class="form-group">
                <label for="inputEmail" class="sr-only">Name</label>
                <input
                  v-model="ime"
                  type="text"
                  id="inputName"
                  class="form-control"
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
                  class="form-control"
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
                  class="form-control"
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
                  class="form-control"
                  placeholder="Repeat password"
                  required
                >
              </div>
              <button class="btn btn-lg btn-primary btn-block" type="submit">Add user</button>
            </form>
          </div>

          <!-- Modal footer -->
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-danger">Close</button>
          </div>-->
        </div>
      </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
      perPage: 5,
      currentPage: 1,
      userID: "",
      ime: "",
      email: "",
      password: "",
      confirmedPassword: "",
      lastPage: "",
      currentPage: ""
    };
  },
  mounted() {
    axios
      .get(
        `https://proxy-requests.herokuapp.com/http://comtrade.sytes.net/api/users?page=1`
      )
      .then(response => {
        this.users = response.data.data.data;
        this.lastPage = response.data.data.last_page;
        this.currentPage = 1;
        this.activate(this.currentPage);
      })
      .then(() => {
        const formaAddUser = document.getElementById("addUsers");     
      });
  },
  methods: {
    showAlert() {
      Swal.fire({
        type: "success",
        title: "User succesfully added",
        showConfirmButton: false,
        timer: 2000
      });
    },
    signup() {
      this.$http
        .post("/auth/signup", {
          name: this.ime,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmedPassword
        })
        .then(request => this.signupSuccessful(request))
        .catch(() => this.signupFailed());
    },
    signupSuccessful() {
      document.getElementById("modal-pozadina").style.display = "none";
      this.showAlert();
    },
    signupFailed() {
      this.error = "Sign Up failed!";
    },
    activate: function(el) {
      this.active_el = el;
    },
    onClick() {
      this.$emit("loadPage", this.pageNumber);
    }
  }
};
</script>

