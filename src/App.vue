<template>
  <div id="app">
    <ul>
      <li><h3>Thai care</h3></li>
    </ul>
    <div id="nav">
      <router-link to="/">Qr code</router-link> |
      <router-link to="/scan">Scan Qrcode</router-link> |
      <router-link to="/history">History</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #42b983;
}

li {
  float: center;
}
</style>
