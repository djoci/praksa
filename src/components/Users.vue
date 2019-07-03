<template>
  <div class="body">
    <div class="container-fluid">
      <nav class="navbar navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand">
          <img src="../assets/img/demo.svg" alt>
        </router-link>
      </nav>
    </div>
    <div class="container-fluid">
      <div class="cont-users">
        <h1>Upload Users</h1>

        <div class="row">
          <div class="col-sm-8">
            <p class="pzm">
              If you would like to seed your mailing with names of people within your organization,
              add
              their names
              here
            </p>
          </div>
          <div class="col-sm-4 text-right">
            <button
              id="uploadButton"
              class="btn upload-btn"
              type="button"
              data-toggle="modal"
              data-target="#myModal"
            >Upload User</button>
          </div>
        </div>
        <div class="strana table-responsive">
          <table class="table">
            <thead class="table-borderless">
              <tr>
                <th scope="col">List Name</th>
                <th scope="col">#Recepient</th>
                <th scope="col">Uploaded By</th>
                <th scope="col">Uploaded Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in users" :key="`user-${index}`">
                <td>{{user.name}}</td>
                <td>{{user.id}}</td>
                <td>{{user.email}}</td>
                <td>
                  {{user.created_at}} &nbsp; &nbsp;
                  <!-- <router-link tag="button" to=""></router-link> -->
                  <a href="#" title="Edit" class="edit">
                    <i class="far fa-edit"></i>
                  </a> &nbsp;
                  &nbsp;
                  <a href="#" title="Delete" class="delete">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="containernovi">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#/Users" aria-label="Previous" v-on:click="nizManje">
                  <i class="fa fa-angle-left"></i>
                </a>
              </li>
              <li
                v-for="i in lastPage"
                :key="i"
                class="page-item active"
                v-on:click="niz(i)"
                @click="activate(i)"
                :class="{ active : active_el == i}"
              >
                <a class="page-link" href="#/Users">{{i}}</a>
              </li>

              <li class="page-item">
                <a class="page-link" href="#/Users" aria-label="Next" v-on:click="nizVise">
                  <i class="fa fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",
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
        //paginacija
        const c = document.querySelector(".containernovi");
        const indexs = Array.from(document.querySelectorAll("index"));
        let cur = -1;
        indexs.forEach((index, i) => {
          index.addEventListener("click", () => {
            c.className = "containernovi";
            void c.offsetWidth; // Reflow
            c.classList.add("open");
            c.classList.add(`i${i + 1}`);
            if (cur > i) {
              c.classList.add("flip");
            }
            cur = i;
          });
        });
      });
  },
  methods: {
    niz: function(pageNumber) {
      axios
        .get(
          `https://proxy-requests.herokuapp.com/http://comtrade.sytes.net/api/users?page= ${pageNumber}`
        )
        .then(response => {
          this.users = response.data.data.data;
          console.log("radi");
        });
    },
    changeActive: function() {
      this.classList.toggle("active");
    },
    nizManje: function() {
      if (this.currentPage === 1) {
        return;
      }
      this.currentPage = this.currentPage - 1;
      axios
        .get(
          `https://proxy-requests.herokuapp.com/http://comtrade.sytes.net/api/users?page= ${
            this.currentPage
          }`
        )
        .then(response => {
          this.users = response.data.data.data;
          this.activate(this.currentPage);
        });
    },
    nizVise: function() {
      if (this.currentPage === this.lastPage) {
        return;
      }
      this.currentPage = this.currentPage + 1;
      axios
        .get(
          `https://proxy-requests.herokuapp.com/http://comtrade.sytes.net/api/users?page= ${
            this.currentPage
          }`
        )
        .then(response => {
          this.users = response.data.data.data;
          this.activate(this.currentPage);
        });
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
<style scoped>
.body {
  background-color: #202646;
  height: 100vh;
  min-height: 100%;
}

h1 {
  font-size: 2em;
}

.upload-btn {
  box-shadow: 2px 3px 3px 3px rgba(0, 0, 0, 0.2);
  font-size: 1em;
  color: #29e4b7;
}

.cont-users {
  margin-left: 180px;
  background-color: #fff;
  padding: 20px;
}

.navbar-brand {
  margin-top: 30px;
  margin-left: 30px;
}
.pzm,
h1 {
  margin-top: 10px;
}
table,
.strana {
  margin-top: 20px;
}
.strana {
  box-shadow: 2px 3px 3px 3px rgba(0, 0, 0, 0.2);
  padding: 10px 20px 20px 20px;
}
.page-link,
.page-link:hover,
.page-link:active,
.page-link:focus {
 /* color: #202646;*/
  margin-right: 5px;
  border-radius: 5px;
}
.page-item.active .page-link {
  background-color: #202646;
  border-color: transparent;
}
.page-link.active .page-link:hover {
  color: #fff;
}
th {
  font-weight: 400;
}

@media (max-width: 767px) {
  .navbar-brand {
    margin-top: 10px;
    margin-left: 10px;
  }

  .cont-users {
    margin: 10px;
    padding: 10px;
  }
}
.modal {
  height: 100vh;
  top: 20%;
}
</style>