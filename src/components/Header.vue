<template>
  <div class="home-header flex-bet">
    <div class="home-header flex-start">
      <div @click="goToHome" class="head-title flex-start">
        <img src="../assets/images/logo-a.png" alt="logo" class="head-logo">
        <p>sherrymusic</p>
      </div>
      <div class="menu-list">
        <router-link v-for="(item,index) in menuList" class="menu-item" :key='index' :to="{ path: '/'+item.route }"
                     tag="a">{{ item.name }}
        </router-link>
      </div>
    </div>
    <div class="flex-start right-item">
      <div @click="goToSearch" class="right-b">
        <SearchOutlined/>
      </div>
      <div @click="goToLogin">登录</div>
    </div>
  </div>
  <div class="mask" @click="searchBox=!searchBox" v-show="searchBox"></div>
  <div class="dialog-box" v-show="searchBox">
    <div class="top-box">
      <input type="text" v-model="searchText" class="search-text" @keyup.enter="search" placeholder="请输入搜索关键词并按回车键…">
    </div>
    <div class="history" v-show="searchHistory.length">
      <div class="flex-bet mb">
        <div>
          <i class="iconfont icon-jiaoyinzujifangke-copy iconrgb"></i>
          <span>历史搜索</span>
        </div>
        <div class="iconrgb clear-all">清空</div>
      </div>
      <ul class="tags">
        <li v-for="item of searchHistory" :key="item">
          <a class="btn flex-start" @click="tag(item)"><span>{{ item }}</span> <i
              class="close-dark iconfont icon-guanbi" @click.stop="deleteItem(item)"></i></a>
        </li>
      </ul>
    </div>

    <div class="hot-search">
      <div class="hot-title">
        <i class="iconfont icon-remen-copy iconrgb"></i>
        <span>热门搜索</span>
      </div>
      <ul class="tags">
        <li v-for="item of searchHot" :key="item">
          <a class="btn flex-start" @click="tag(item)"><span>{{ item.first }}</span> <i
              class="close-dark iconfont icon-guanbi" @click.stop="deleteItem(item)"></i></a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import {reactive, ref, onMounted, toRefs} from 'vue'
import {useRouter} from 'vue-router'
import {SearchOutlined} from '@ant-design/icons-vue';
import {getHotSearch} from '@/api/index';

export default {
  name: "Header",
  components: {
    SearchOutlined
  },
  setup() {

    const menuList = reactive([
      {name: '发现音乐', route: 'find'},
      {name: '排行榜', route: 'sort'},
      {name: '歌单', route: 'sheet'},
      {name: '歌手', route: 'singer'},
      {name: '视频', route: 'video'},
      {name: 'MV', route: 'mv'},
    ])
    const router = useRouter()
    const menuIndex = ref(-1)
    const searchBox = ref(false)
    const searchText = ref('')
    const searchHistory = ref([])
    const searchHot = ref([])


    //热搜列表
    onMounted(async () => {
      // try {
      //   const {result} = await getHotSearch()
      //   searchHot.value = result?.hots
      // } catch (e) {
      //   console.log(e)
      // }

    })

    function tag(item) {
      console.log(item)
    }

    function deleteItem(item) {
      console.log(item)
    }

    const goToHome = () => {
      router.push('/home')
    }

    function search() {
      let session=sessionStorage.getItem('_search')
      if(session){
        let _searchList=JSON.parse(session)
        _searchList.unshift(searchText.value)
        sessionStorage.removeItem('_search')
        sessionStorage.setItem('_search',JSON.stringify(_searchList))
      }else{
        let firstSearch=[];
        firstSearch.push(searchText.value)
        sessionStorage.setItem('_search',JSON.stringify(firstSearch))
      }
      searchBox.value=false;
    }

    function goToLogin() {
      router.push('/')
    }

    function goToSearch(){
      let history=sessionStorage.getItem('_search');
      if(history){
        searchHistory.value=JSON.parse(history)
      }
      searchBox.value=!searchBox.value
    }


    return {
      searchHot,
      menuList,
      searchText,
      menuIndex,
      searchBox,
      searchHistory,
      search,
      goToHome,
      goToLogin,
      tag,
      deleteItem,
      goToSearch,
    }
  },
  methods:{

  },
}
</script>

<style lang="less" scoped>
.home-header {
  height: 100%;

  .head-title {
    cursor: pointer;

    .head-logo {
      width: 32px;
    }

    p {
      font-weight: bold;
      font-size: 21px;
      margin-left: 5px;
    }
  }

  .menu-list {
    margin-left: 30px;

    .menu-item {
      padding: 0 15px;
    }

    .router-link-active {
      position: relative;
      color: #fa2800;
    }

    .router-link-active::after {
      content: "";
      position: absolute;
      background: #fa2800;
      left: 0;
      right: 0;
      bottom: -14px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      margin: 0 auto;
      opacity: 1;
    }
  }

  .right-item {
    cursor: pointer;

    .right-b {
      font-size: 20px;
      padding-right: 15px;
      margin-right: 13px;
    }
  }
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 200vh;
  height: 150vh;
  background: rgba(0, 0, 0, 0.1);
  z-index: 997;
  backdrop-filter: blur(10px);
}

.dialog-box {
  width: 790px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 200px;
  margin-left: -350px;
  z-index: 999;

  .top-box {
    height: 210px;
    padding: 78px 30px;
    background: url('@/assets/images/personal.jpg') center center no-repeat;

    .search-text {
      width: 100%;
      outline: none;
      border: none;
      height: 45px;
      color: #fff;
      text-align: center;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 5px;

      &::placeholder {
        color: #fff;
        opacity: 1
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.04);
        border-color: transparent;
      }

      &:focus {
        background-color: rgba(255, 255, 255, 0.04);
        border-color: transparent;
        color: #fff;
      }
    }

  }

  .history {
    .mb {
      line-height: 18px;
      margin-bottom: 15px;
    }

    .clear-all {
      cursor: pointer;
    }

  }

  .tags {
    width: 100%;
    margin: 0 -10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    li {
      padding: 4px 8px;
      cursor: pointer;

      .btn {
        font-weight: 400;
        color: #6d7685;
        background-color: #f4f4f5;
        user-select: none;
        border: 1px solid transparent;
        font-size: 12px;
        padding: 2px 10px;
        line-height: 1.5;

        .close-dark {
          margin-left: 7px;
        }
      }
    }
  }

  .history, .hot-search {
    padding: 18px 42px;
    background: #fff;

    .iconrgb {
      margin-right: 6px;
    }

    .hot-title {
      line-height: 18px;
      margin-bottom: 15px;
    }
  }
}
</style>