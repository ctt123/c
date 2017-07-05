<template>
  <div>

  <el-row class="commodities" style="background-color:#fafafa;">
    <el-col :xs="0" :sm="2" :md="2" :lg="2"></el-col>
    <el-col :xs="24" :sm="20" :md="20" :lg="20">
      <el-row class="search-condition-box">
        <el-col :xs="3" :sm="2" :md="2" :lg="1" v-for="type in commodityType" :key="type.id"
                @click="commodityType(type.id)">{{type.name}}
        </el-col>
      </el-row>
      <div class="sort-box">
        <div class="sort-container">
          <a @click=""><span>综合</span></a>
          <a @click=""><span>新品</span></a>
        </div>
      </div>
      <el-row class="show-commodities">
        <el-row class="pics">
          <el-col v-for="pic in pics" :key="pic.id" :xs="12" :sm="6" :md="4" :lg="4" class="pic pointer"
                  style="margin-bottom:20px;line-height:0;">
            <div class="pic-div" @click="goPage(pic)">
              <img v-bind:src="pic.img.href" alt="">
              <!--<div class="pic-type"><span>{{pic.title}}</span></div>-->
              <a class="pic-name">{{pic.img.name}}</a>
            </div>
          </el-col>
        </el-row>
      </el-row>


    </el-col>
    <el-col :xs="0" :sm="2" :md="2" :lg="2"></el-col>
  </el-row>
  </div>
</template>
<script>
  import '../../data1'
  import axios from 'axios'
  export default{
    name: 'serviceTopic',
    data () {
      return {
        commodityType: [
          {name: '学习', url: '', id: 0},
          {name: '配饰', url: '', id: 1},
          {name: '电子', url: '', id: 2},
          {name: '包包', url: '', id: 3},
          {name: '女装', url: '', id: 4},
          {name: '男装', url: '', id: 5},
          {name: '园艺', url: '', id: 6},
          {name: '配件', url: '', id: 7},
          {name: '化妆', url: '', id: 8},
          {name: '运动', url: '', id: 9},
          {name: '其他', url: '', id: 10}
        ],
        pics: [],
        itemDetail: {}
      }
    },
    created: function () {
      this.load()
    },
    methods: {
      goPage (pic) {
        sessionStorage.removeItem('itemDetail')
        sessionStorage.setItem('itemDetail', JSON.stringify(pic))
        this.$router.push({name: 'itemDetail', params: {id: parseInt(pic.id)}})
      },
      load () {
        let dataThis = this
        axios.get('/home').then(function (res) {
          dataThis.pics = res.data.serviceArray
          console.log(res.data.serviceArray)
        })
      }
    }
  }
</script>
<style scoped>
  .el-col {
    min-height: 40px;
    line-height: 40px;
  }

  .search-condition-box {
    border: 1px solid #e5e5e5;
    background-color: #fafafa;
  }

  .commodities {
    margin-top: 40px;
  }

  .sort-box {
    border: 1px solid #e5e5e5;
    padding: 5px;
  }

  .show-commodities {
    /*display: flex;*/
    /*justify-content:space-between;*/
    /*flex-wrap: wrap;*/
    /*flex-direction: row;*/
  }

  .test {
    border: 1px solid black;
    height: 20px;
    display: inline-block;
    margin: 10px;
  }

  .pic-type {
    position: absolute;
    bottom: 30px;
    width: 100%;
  }

  .pic img {
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

  .pic {
    padding-left: 10px;
  }

  .pics {
    margin-left: -10px;
  }

  .pic-div {
    border-radius: 10px;
    overflow: hidden;
  }

  .pic-name {
    background-color: #fff;
    width: 100%;
    display: inline-block;
    height: 40px;
    line-height: 40px;
  }

</style>
