<template>
  <div id="app">
    <img src="./assets/icon.png">
     <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/todo">Todos</router-link></li>
     </ul>
    <router-view class="view"></router-view>
  </div>
</template>


<script>
export default {};
</script>


<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>