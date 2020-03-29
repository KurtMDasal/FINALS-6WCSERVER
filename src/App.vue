<template>
  <div>
    <Navigation></Navigation>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
export default {
  name: 'app',
  components: {
    'Navigation': Navigation,
    'Footer' : Footer,
    'Header' : Header
  }
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 10px;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 20px;
}

#nav a.router-link-exact-active {
  color: skyblue;
}
</style>
