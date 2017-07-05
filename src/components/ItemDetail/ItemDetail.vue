<template>
  <el-row style="background-color:#fafafa;">
    <el-col :xs="0" :sm="2" :md="2" :lg="2"></el-col>
    <el-col :xs="24" :sm="20" :md="20" :lg="20" class="item-container">
      <el-row class="item">
        <el-col :xs="24" :sm="20" :md="18" :lg="20" class="item-main">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" class="item-pic-container">
            <img :src="item.img.href" alt="" class="item-pic">
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" class="item-detail">
            <el-row><span>物品名称：</span>{{item.img.name}}</el-row>
            <el-row><span>物品换家：</span>{{item.img.changer}}</el-row>
            <el-row><span>新旧程度：</span>{{item.img.degree}}成新</el-row>
            <el-row><span>物品简介：</span>{{item.img.intro}}</el-row>
            <el-row><span>交易状态：</span>{{item.img.tradeAtti}}</el-row>
            <el-row><span>发布日期：</span>{{item.img.time}}</el-row>
            <el-button type="primary" @click="showDialog(this)">我要换</el-button>
          </el-col>
          <el-col>
            <el-row class="recommend-title">评论区</el-row>
            <el-row v-for="comment in item.comments" class="comments">

              <el-col :xs="8" :sm="7" :md="6" :lg="6">
                <div class="recommender-avatar"><img v-bind:src="comment.avatar" alt=""></div>
                {{comment.changer}}
              </el-col>
              <el-col :xs="8" :sm="10" :md="12" :lg="11" class="recommend-contain">{{comment.comment}}</el-col>
              <el-col :xs="7" :sm="6" :md="5" :lg="5">
                {{comment.time}}
              </el-col>
            </el-row>

            <el-col>
              <h1>发表评论</h1>
              <el-row>
                <el-input
                  type="textarea"
                  :rows="8"
                  placeholder="请输入内容"
                  v-model="textarea"
                  class="do-recommend">
                </el-input>
              </el-row>
              <el-row class="recommend-button">
                <el-button type="primary" @click="pushComment(this)">
                  发表
                </el-button>
              </el-row>

            </el-col>

          </el-col>


        </el-col>
        <el-col :xs="24" :sm="4" :md="6" :lg="4" class="recommend">
          <el-row><h1 style="margin-left:40px;">推荐</h1></el-row>
          <el-row v-for="pic in pics" class="recommend-item">
            <img v-bind:src="pic.img.href" alt="">
            <span>{{pic.title}}</span>
          </el-row>
        </el-col>
      </el-row>

    </el-col>
    <el-col :xs="0" :sm="2" :md="2" :lg="2"></el-col>
    <el-dialog title="我的物品" :visible.sync="dialogVisible" class="my-item">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in myItem" :label="city" :key="city"><img :src="city.img.href" alt=""
                                                                           style="width:80px;height:150px;">
        </el-checkbox>
      </el-checkbox-group>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </el-row>

</template>
<script>
  import axios from 'axios'
  import Fdata from '../../data1'
  export default {
    name: 'itemDetail',
    data () {
      return {
        item: {},
        Fdata,
        pics: [],
        myItem: [],
        dialogVisible: false,
        checkAll: true,
        isIndeterminate: true,
        textarea: ''
      }
    },
    created () {
      this.item = JSON.parse(sessionStorage.getItem('itemDetail'))
      console.log(this.item)
      this.load()
    },
    methods: {
      load () {
        let dataThis = this
        axios.get('/home').then(function (res) {
          dataThis.pics = res.data.array
        })
      },
      showDialog (dom) {
        this.dialogVisible = true
        let dataThis = this
        axios.get('/home').then(function (res) {
          dataThis.myItem = res.data.array
        })
      },
      handleCheckAllChange (event) {
        this.checkedCities = event.target.checked ? cityOptions : []
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange (value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.cities.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
      },
      pushComment (comment) {
        let time = new Date().getTime()
        let com = {}
        com.avatar = 'http://s2.mogucdn.com/mlcdn/c45406/170417_72h3didl0lhh3cc3g50418g48i84b_302x604.jpg_300x9999.v1c7E.70.webp'
        com.changer = '曲筱绡'
        com.time = time
        com.comment = this.textarea
        this.item.comments.push(com)
        console.log(this.item.comments)
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
  @media screen and (max-width: 768px){
    .item-main,.recommend-item{
      padding:0;
    }
    .recommend{
      border-left:none;
    }
  }
</style>

