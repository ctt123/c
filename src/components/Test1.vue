<template>
  <div>
    <h1>test1</h1>
    <el-select v-model="value" palceholde="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input v-model="input" placeholder="请输入内容"></el-input>

  </div>
</template>
<style scoped>
  h1 {
    backgrounnd-color: pink;
  }
</style>
<script type="text/ecmascript-6">
//  import Header from './Header.vue'
  export default{
    data () {
      return {
        options: [{
          value: 'option1',
          label: 'pig'
        }, {
          value: 'option2',
          label: 'monkey'
        }],
        value: '',
        input: ''
      }
    }
  }
</script>
