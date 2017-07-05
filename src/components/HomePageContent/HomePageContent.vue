<template>
  <div>
    <Carousel></Carousel>
    <GoodRow></GoodRow>
    <GoodRow></GoodRow>
  </div>
</template>
<script>
  import Carousel from '../Carousel/Carousel'
  import GoodRow from '../GoodRow/GoodRow'
  export default{
    name: 'HomePageContent',
    data () {
      return {
      }
    },
    components: {
      Carousel, GoodRow
    }
  }

</script>
<style>

</style>
