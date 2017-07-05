<template>
  <div>
    <el-row class="goods">
      <el-col :xs="0" :sm="2" :md="2" :lg="2"></el-col>
      <el-col :xs="24" :sm="20" :md="20" :lg="20">
        <el-col :xs="10" :sm="4" :md="2" :lg="2" class="goods-topic"><span>b</span></el-col>
        <el-col :xs="4" :sm="16" :md="20" :lg="20"></el-col>
        <el-col :xs="10" :sm="4" :md="2" :lg="2" class="more pointer"><span @click="goPage">查看更多></span></el-col>
      </el-col>
      <el-col :xs="0" :sm="2" :md="2" :lg="2"></el-col>
    </el-row>
    <el-row>
      <el-col :xs="0" :sm="2" :md="2" :lg="2" class="fill"></el-col>
      <el-col :xs="24" :sm="20" :md="20" :lg="20">
        <el-row class="pics">
          <el-col v-for="pic in pics" :key="pic.id" :xs="12" :sm="6" :md="4" :lg="4" class="pic pointer">
            <div  @click="goDetail(pic)">
            <img v-bind:src="pic.img.href" alt="">
            <div class="pic-type"><span>{{pic.img.name}}</span></div>
            </div>
          </el-col>
        </el-row>

      </el-col>
      <el-col :xs="0" :sm="2" :md="2" :lg="2" class="fill"></el-col>
    </el-row>
  </div>
</template>
<script>
  //  import data from 'mockjs'
  import Fdata from '../../data1'
  //  import Fdata from '../../data'
  import axios from 'axios'
  //  import router from '../../router'
  export default{
    name: 'GoodRow',
    data () {
      return {
        goods: [
          {goodType: '书本', good: [{name: 'aa'}, {name: 'aa'}, {name: 'aa'}]}
        ],
        Fdata,
        pics: []
      }
    },
    created: function () {
//      this.$http.get('http://g.cn').then(
//        (successData) => {
//          this.pics = successData.body.array
//        },
//        (fileData) => {
//          console.log(fileData)
//        }
//       此时的this才是该模板的，如果在axios的this则是axios的this，非该模板中的。

      var dataThis = this
      axios.get('/home').then(function (res) {
        dataThis.pics = res.data.array
        console.log(dataThis.pics)
      })
    },
    methods: {
      goPage () {
        this.$router.push({name: 'serviceTopics', params: {serviceTopic: 'cloth'}})
      },
      goDetail (pic) {
        sessionStorage.removeItem('itemDetail')
        sessionStorage.setItem('itemDetail', JSON.stringify(pic))
        this.$router.push({name: 'itemDetail', params: {id: parseInt(pic.id)}})
      }
    }

  }
</script>
<style scoped>
  .goods .el-col, .fill {
    height: 50px !important;
    line-height: 50px;
  }

  .goods-topic {
    text-align: left;
  }

  .goods-topic span {
    border-left: 5px solid red;
    display: inline-block;
    padding-left: 10px;
    height: 30px;
    line-height: 30px;
  }

  .pic {
    overflow: hidden;
    position: relative;
    text-align: center;
    padding-left: 10px;
  }

  .pic-type {
    position: absolute;
    bottom: 30px;
    width: 100%;
  }


  .pic span {
    display: inline-block;
    height: 30px;
    padding: 0 10px;
    line-height: 30px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    color: white;
    background-color: rgba(0, 0, 0, .5);
  }

  .pics {
    margin-left: -10px;
  }
  .pic img{
    width:100%;
  }

  .goods .more {
    text-align: right;
  }

  .goods .more span {
    margin-right: 10px;
  }

  @media screen and (max-width: 768px) {
    .pics {
    }
  }
</style>
