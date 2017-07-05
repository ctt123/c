<template>
  <div>
  <el-row class="service">
    <el-col :xs="0" :sm="2" :md="2" :lg="2"></el-col>
    <el-col :xs="24" :sm="20" :md="20" :lg="20">
      <el-row>
        <el-col :xs="15" :sm="10" :md="5" :lg="5">
          <dl>
            <dt class="service-topic"><i class="icon iconfont icon-icon57"></i>旧货主题</dt>
            <dl class="service-container el-col el-col-24 el-col-xs-15 el-col-sm-10 el-col-md-5 el-col-lg-5">
              <dd v-for="option in commodityType" class="pointer">{{option.name}}<span v-for="child in option.child">{{child.name}}</span></dd>
            </dl>
          </dl>
        </el-col>
      </el-row>
    </el-col>
    <el-col :xs="0" :sm="2" :md="2" :lg="2"></el-col>
  </el-row>
  <el-carousel>
    <el-carousel-item v-for="pic in pics">
      <!--<h3>{{item}}</h3>-->
      <img :src="pic.href" alt="" class="carousel-pic">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>
<script>
  import Fdata from '../../data1'
  import axios from 'axios'
  export default{
    data () {
      return {
        name: 'Carousel',
        pics: [
          {href: '../static/img/1.png'},
          {href: '../static/img/2.png'},
          {href: '../static/img/3.png'},
          {href: '../static/img/4.png'}
        ],
        Fdata,
        commodityType: []
      }
    },
    created () {
      let dataThis = this
      axios.get('/home').then(function (res) {
        dataThis.commodityType = res.data.commodityType
      })
    }
  }
</script>
<style>
  .service .el-col {
    height: 40px;
    line-height: 40px;
  }

  .icon-icon57 {
    position: relative;
    top: -3px;
  }

  .service-topic {
    background-color: #e97572;
    text-align: left;
    border-bottom: none !important;
    height: 40px;
    padding-left: 10px;
    color: white;
  }

  .service-container {
    position: absolute;
    z-index: 10;
    text-align: left;
  }

  .service-container dd {
    background-color: rgba(255, 255, 255, .8);
    padding-left: 10px;
  }

  .service-container dd:hover {
    background-color: white;
    border-left: 2px solid red;
  }
  .el-carousel__container {
    height: 440px !important;
  }


  .carousel-pic{
    width:100%;
    height:100%;
  }
  @media screen and (max-width: 768px) {
    .el-carousel__container {
      height: 200px !important;
    }
    .service-container{
      display:none;
    }
    .service-container:hover{
      display:block;
    }
  }
</style>
