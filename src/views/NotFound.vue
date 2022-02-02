<template>
  <div id="NotFound">
      <div class="container">
      <vue-typed-js :strings="['404']" :loop="false">
        <div class="item">
        <h1>NotFound</h1>
        <span class="typing errcode"></span>
        <p>can't path /{{ path }}</p>
        <router-link class="btn btn-primary" to="/">HOME</router-link>
        </div>
       </vue-typed-js>
       </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            path: this.$route.params.pathMatch
        }
    },
}
</script>

<style scoped>
body{
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.no-underline:hover {
  text-decoration: none;
}

.item{
    padding: 0 30px 0 30px;
    text-align: center;
    color:#fff;
}
.errcode{
    font-size: 200px;
}
.container{
    margin: 0 auto;
    max-width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>