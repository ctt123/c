<template>
  <div class="homepage">
    <Header></Header>
    <!--<HomePageContent></HomePageContent>-->
    <router-view></router-view>
  </div>
</template>

<script>

  import Header from '../Login/Login'
  import HomePageContent from '../HomePageContent/HomePageContent'
  export default {
    name: 'homePage',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created: function () {
    },
    components: {
      Header, HomePageContent
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }


</style>
