<template>
   <div id="/">
    <!-- <div ref="vanta"> -->
    <div class="container">
      <vue-typed-js :strings="['Smartenergymeter']" :loop="true">
      <div class="item">
        <h3>Welcome to</h3>
        <span class="typing h1"></span>
        <p>Electric power meter that connects you to the internet of things.</p>
        <router-link class="btn btn-primary" to="/dashboard">Get Started</router-link>
      </div>
       </vue-typed-js>
    </div>
    <!-- </div> -->
  </div>
 
</template>

<script>

  export default {
    name: 'Home',

    components: {
      
    },
    mounted(){
    // document.title = "smartenergymeter"
    // window.VANTA.BIRDS({
    //   el: this.$refs.vanta,
    //   mouseControls: true,
    //       touchControls: true,
    //       gyroControls: false,
    //       minHeight: screen.height,
    //       minWidth: screen.width,
    //       scale: 1.0,
    //       scaleMobile: 1.0,
    //       separation: 40.00,
    //       birdSize: 2.00
    // })
    
    }
  };
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
