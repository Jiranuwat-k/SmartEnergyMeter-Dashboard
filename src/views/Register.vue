<template>
  <div id="register">
    <div class="container">
      <form @submit.prevent="Register()" class="mt-4 border p-4 rounded">
        <h3 class="text-center my-2">Register</h3>
        <div class="row">
          <div class="form-group col">
          <label for="firstname">Firstname</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            v-model="register.firstname"
            class="form-control"
            autofocus
            required
          />
        </div>
        <div class="form-group col">
          <label for="lastname">Lastname</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            v-model="register.lastname"
            class="form-control"
            autofocus
            required
          />
        </div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="register.email"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model.lazy="register.password"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="birthday">Birthday</label>
          <input
            type="date"
            name="birthbay"
            id="birthday"
            v-model="register.birthday"
            class="form-control"
          />
        </div>
        <div class="form-check form-check-inline mt-3">
          <input
            class="form-check-input"
            type="radio"
            name="male"
            id="male"
            value="male"
            v-model="register.gender"
          />
          <label class="form-check-label" for="male">Male</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="female"
            id="female"
            value="female"
            v-model="register.gender"
          />
          <label class="form-check-label" for="female">Female</label>
        </div>
        <div class="clearfix"></div>
        <router-link to="/login" class="link d-block float-start pt-2"
          >Login</router-link
        >
        <button type="submit" class="btn btn-outline-success float-end">
          Create
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
  name: "Register",
  data() {
    return {
      register: {
        firstname: "",
        lastname: "",
        email: "",
        gender: "",
        birthday: "",
        password: "",
      },
      status: {
        err: "",
        msg: "",
      },
    };
  },
  methods: {
    async Register() {
      await axios({
        method: "post",
        baseURL: "https://smartenergymeter-01.herokuapp.com",
        url: "/api/user/register",
        data: this.register,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          
          this.register.firstname = "";
          this.register.lastname = "";
          this.register.gender = "";
          this.register.birthday = "";
          this.register.email = "";
          this.register.password = "";
          this.status.err = false;
          this.status.msg = "Register success!";
          setTimeout(() => {
            this.$router.push("/login");
          }, 2000);
        })
        .catch((err) => {
          this.status.err = true;
          this.status.msg = err.response.data;
        });
    },
  },
};
</script>

<style></style>
