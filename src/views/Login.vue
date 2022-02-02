<template>
  <div id="login">
    <div class="container">
      <form @submit.prevent="Login()" class="mt-4 border p-4 rounded">
        <h3 class="text-center my-1">Login</h3>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="login.email"
            class="form-control"
            required
            placeholder="email"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model.lazy="login.password"
            class="form-control"
            required
            placeholder="password"
          />
        </div>
        <div class="clearfig"></div>
        <router-link to="/register" class="link d-block float-start pt-4"
          >register</router-link
        >
        <button type="submit" class="btn btn-outline-success float-end mt-3">
          Log in
        </button>
        <div class="clearfix"></div>
      </form>
      <div
        v-if="status.err === true"
        class="alert alert-danger mt-3"
        role="alert"
      >
        {{ status.msg }}
      </div>
      <div
        v-else-if="status.err === false"
        class="alert alert-success mt-3"
        role="alert"
      >
        {{ status.msg }}
      </div>
      <div v-else></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      status: {
        err: "",
        msg: "",
      }
    };
  },
  beforeCreate() {
    // document.title = "Login-smartenergymeter"
    // if(this.$cookies.get("login") === "true"){
    //   this.$router.push("/posts");
    // }
  },
  methods: {
    async Login() {
      await axios({
        method: "post",
        baseURL: "https://smartenergymeter-01.herokuapp.com",
        url: "/api/user/login",
        data: this.login,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          this.login.email = "";
          this.login.password = "";
          this.status.err = false;
          console.log(res.headers['auth-token'])
          this.$cookies.set("auth-token",res.headers['auth-token'],"3MIN"); 
          this.$cookies.set("refresh-token", res.headers['refresh-token'])
          this.$cookies.set("login",true);
          this.status.msg = "Login success!";
          setTimeout(() => {
            this.$router.push("/posts");
          }, 1000);
        })
        .catch((err) => {
          this.status.err = true;
          this.status.msg = err.response.data;
        });
    }
  },
};
</script>

<style>
</style>
