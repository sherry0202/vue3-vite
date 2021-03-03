<template>
    <div>
      <div class="banner">
        <!--    <el-carousel :interval="4000" class="banner-carousel" type="card">-->
        <!--      <el-carousel-item :key="index" v-for="(banner,index) in banners">-->
        <!--        <img-->
        <!--            :src="genImgUrl(banner.imageUrl, 1000, 400)"-->
        <!--            class="banner-img"-->
        <!--        />-->
        <!--      </el-carousel-item>-->
        <!--    </el-carousel>-->
      </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import {getBanner} from '@/api/index'
export default {
name: "Find",
  components: {
  },
  setup(){
    const banner=ref([]);
    // (async ()=>{
    //   const {banners}=await getBanner()
    //   banner.value=banners
    // })()

    function onSwiper(swiper) {
      console.log(swiper);
    }
    function onSlideChange() {
      console.log('slide change');
    }
    function genImgUrl(url, w, h) {
      if (!h) {
        h = w
      }
      url += `?param=${w}y${h}`
      return url
    }
    // banners:[
    //   {
    //     imageUrl: "http://p1.music.126.net/n1vHqwuQcTbHGX13Sjfu7g==/109951165766830139.jpg",
    //     program: null,
    //     scm: "1.music-homepage.homepage_banner_force.banner.2744084.-418037891.null",
    //     song: null,
    //     targetId: 1822761395,
    //     targetType: 1,
    //     titleColor: "red",
    //     typeTitle: "新歌首发",
    //     url: null,
    //     video: null},
    //   {
    //     imageUrl: "http://p1.music.126.net/v85vGcpzPb8HXviLcZKTGw==/109951165766809354.jpg",
    //     program: null,
    //     scm: "1.music-homepage.homepage_banner_force.banner.2744084.-418037891.null",
    //     song: null,
    //     targetId: 1822761395,
    //     targetType: 1,
    //     titleColor: "red",
    //     typeTitle: "新歌首发",
    //     url: null,
    //     video: null},
    //   {
    //     imageUrl: "http://p1.music.126.net/YnZKXYlsSL0eBC4HVYKeHQ==/109951165771063867.jpg",
    //     program: null,
    //     scm: "1.music-homepage.homepage_banner_force.banner.2744084.-418037891.null",
    //     song: null,
    //     targetId: 1822761395,
    //     targetType: 1,
    //     titleColor: "red",
    //     typeTitle: "新歌首发",
    //     url: null,
    //     video: null},
    //   {
    //     imageUrl: "http://p1.music.126.net/fkHPruXkU5YWXIcSOrci2g==/109951165771063238.jpg",
    //     program: null,
    //     scm: "1.music-homepage.homepage_banner_force.banner.2744084.-418037891.null",
    //     song: null,
    //     targetId: 1822761395,
    //     targetType: 1,
    //     titleColor: "red",
    //     typeTitle: "新歌首发",
    //     url: null,
    //     video: null}
    // ],
    return{
      banner,
      genImgUrl
    }
  }
}
</script>

<style lang="less" scoped>

</style>