<template>
  <el-row style="background-color:#fafafa;">
    <el-col :xs="0" :sm="2" :md="2" :lg="2"></el-col>
    <el-col :xs="24" :sm="20" :md="20" :lg="20" class="item-container">
      <el-row class="item">
        <el-col class="item-main">

          <el-row class="personality-avatar"><img
            src="http://s2.mogucdn.com/mlcdn/c45406/170519_7h35l8cgei94i7a0lflaf63ffbehd_395x790.jpg_400x9999.v1c7E.70.webp"
            alt=""></el-row>
          <el-row style="margin-top:50px;margin-bottom:20px;">
            <div><h1>我发布的物品</h1></div>
          </el-row>
          <el-row class="pics" :gutter="20">
            <el-col v-for="pic in pics" :key="pic.id" :xs="12" :sm="6" :md="4" :lg="4" class="pic pointer">
              <div @click="goDetail(pic)">
                <img v-bind:src="pic.img.href" alt="">
                <div class="pic-type"><span>{{pic.img.name}}</span></div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <div><h1>我的消息</h1></div>
          </el-row>

          <el-col>
          </el-col>
        </el-col>

      </el-row>
    </el-col>
  </el-row>
</template>
<script>
  import axios from 'axios'
  import Fdata from '../../data1'
  export default {
    name: 'personality',
    data () {
      return {
        Fdata,
        pics: []
      }
    },
    created () {
//      this.item = JSON.parse(sessionStorage.getItem('itemDetail'))
//      console.log(this.item)
      var dataThis = this
      axios.get('/home').then(function (res) {
        dataThis.pics = res.data.array
        console.log(dataThis.pics)
      })
    },
    methods: {
      goDetail (pic) {
        sessionStorage.removeItem('itemDetail')
        sessionStorage.setItem('itemDetail', JSON.stringify(pic))
        this.$router.push({name: 'itemDetail', params: {id: parseInt(pic.id)}})
      }
    }
  }
</script>
<style scoped>
  .item-container {
    margin-top: 50px;
    background-color: #fff;
    padding: 40px;
  }

  .item-pic {
    width: 100%;
  }

  .item-pic-container {
    overflow: hidden;
    max-height: 400px;
  }

  .item-detail {
    text-align: left;
    padding-left: 40px;
  }

  .item-detail .el-row {
    height: 40px;
    line-height: 40px;
  }

  .recommend {
    border-left: 1px solid black;
  }

  .recommend-item {
    overflow: hidden;
    padding-left: 40px;
    margin-bottom: 20px;
  }

  .comments {
    border-bottom: 1px solid #eeeeee;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .recommend-item img {
    width: 100%;
    margin-bottom: 10px;
  }

  .recommend-title {
    padding: 20px;
    margin-top: 20px;
  }

  .recommend-contain {
    text-align: left;
  }

  .recommender-avatar img {
    width: 100%;
    margin: 0 !important;
  }

  .recommender-avatar {
    text-align: center !important;
    width: 80px;
    height: 80px;
    overflow: hidden;
    margin: 0 auto;

  }

  .my-item .el-dialog--small {
    width: 80% !important;
  }

  .do-recommend {
    margin: 20px auto;
  }

  .item-main {
    padding-right: 40px;
  }

  .recommend-button {
    text-align: left;
  }

  .personality-avatar {
    width: 100px;
    height: 100px;
    overflow: hidden;
    margin: 0 auto;
  }

  .personality-avatar img {
    width: 100%;
  }

  .pic img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .item-main, .recommend-item {
      padding: 0;
    }

    .recommend {
      border-left: none;
    }
  }
</style>

