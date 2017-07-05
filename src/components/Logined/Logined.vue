<template>
  <header>
    <el-row>
      <el-col :xs="0" :sm="2" :md="2" :lg="2"></el-col>
      <el-col :xs="4" :sm="4" :md="2" :lg="2" class="pointer">
        <div class=""></div>
        <span @click="goHomePage"><i class="icon iconfont icon-LOGO"></i></span></el-col>
      <el-col :xs="12" :sm="12" :md="16" :lg="16">
        <div class=""></div>
      </el-col>
      <el-col :xs="4" :sm="2" :md="1" :lg="1">
        <div class="header-avatar">
          <img src="http://s2.mogucdn.com/mlcdn/c45406/170519_7h35l8cgei94i7a0lflaf63ffbehd_395x790.jpg_400x9999.v1c7E.70.webp" alt="">
        </div>
      </el-col>
      <el-col :xs="4" :sm="2" :md="1" :lg="1">
        <el-button @click="Personality()" type="text" class="register" >用户中心</el-button>
      </el-col>
      <el-col :xs="0" :sm="2" :md="2" :lg="2"></el-col>
    </el-row>

  </header>

</template>
<script>
  export default {
    name: 'header',
    data () {
      return {
      }
    },
    methods: {
      goHomePage: function () {
        this.$router.push({path: '/user'})
      },
      Personality: function () {
        this.$router.push({name: 'personality'})
      }
    }
  }
</script>
<style>
  .header-avatar img{
    width:40px !important;
  }
  .header-avatar{
    margin-top:5px;
    width:40px;
    height:40px;
    overflow:hidden !important;
  }
</style>

