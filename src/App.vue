<template>
  <div id="app">
    <router-view name="Header"></router-view>
    <router-view></router-view>
    <footer>
      <el-row>
        <el-col :xs="0" :sm="2" :md="2" :lg="2"></el-col>

        <el-col :xs="24" :sm="20" :md="20" :lg="20">
          <div class=""></div>
        </el-col>

        <el-col :xs="0" :sm="2" :md="2" :lg="2"></el-col>

      </el-row>
      <el-row>Copyright © 2015.YC</el-row>
    </footer>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data () {
      return {}
    },
    methods: {
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
  }

  header .el-col {
    height: 50px;
    line-height: 50px;
    background-color: #00c78a;
    color: #fff;
  }

  .register:hover, .login:hover {
    background-color: rgba(142, 167, 160, 0.52);
  }

  footer {
    background-color: #555555;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .pointer {
    cursor: pointer;
  }

  footer .el-col {
    color: #fff;
    height: 50px;
  }

  .el-col {
    min-height: 40px;
  }
  .el-row{
    min-height: 40px;
    line-height: 40px;
  }

  .light-btn {
    margin-left: -50px !important;
  }

  .light-btn1 {
    margin-left: -90px !important;
  }


</style>
