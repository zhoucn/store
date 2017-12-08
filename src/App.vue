<template>
  <div id="app">
    <mt-header fixed title="商城">
      <mt-button icon="search" slot="left" @click="searchClick"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-search v-if="searchShow" v-model="searchValue" cancel-text="取消" placeholder="搜索">
      <mt-cell v-for="item in searchResult" :title="item.title" :value="item.value">
      </mt-cell>
    </mt-search>
    <div class="iScroll" ref="iScroll">
      <div>
        <mt-swipe :auto="4000">
          <mt-swipe-item><a href="#"><img src="./assets/img/banner/b1.jpg"></a></mt-swipe-item>
          <mt-swipe-item><a href="#"><img src="./assets/img/banner/b2.jpg"></a></mt-swipe-item>
          <mt-swipe-item><a href="#"><img src="./assets/img/banner/b3.jpg"></a></mt-swipe-item>
          <mt-swipe-item><a href="#"><img src="./assets/img/banner/b4.jpg"></a></mt-swipe-item>
        </mt-swipe>
        <ul class="recommend">
          <li><a href=""><img src="./assets/img/recommend/l1.png"><p>商城入口</p></a></li>
          <li><a href=""><img src="./assets/img/recommend/l2.png"><p>商城入口</p></a></li>
          <li><a href=""><img src="./assets/img/recommend/l3.png"><p>商城入口</p></a></li>
          <li><a href=""><img src="./assets/img/recommend/l4.png"><p>商城入口</p></a></li>
          <li><a href=""><img src="./assets/img/recommend/l5.png"><p>商城入口</p></a></li>
          <li><a href=""><img src="./assets/img/recommend/l6.png"><p>商城入口</p></a></li>
          <li><a href=""><img src="./assets/img/recommend/l7.png"><p>商城入口</p></a></li>
          <li><a href=""><img src="./assets/img/recommend/l8.png"><p>商城入口</p></a></li>
          <li><a href=""><img src="./assets/img/recommend/l9.png"><p>商城入口</p></a></li>
          <li><a href=""><img src="./assets/img/recommend/l10.png"><p>商城入口</p></a></li>
        </ul>
        <div class="hot-news">
          <span><img src="./assets/img/other/hot.png"></span>
          <p><span class="tag">热文</span><span class="txt">油污万万别用钢丝球擦，教你一招洁净如初</span></p>
        </div>
        <div class="s-box">
          <div class="s-left">88888</div>
          <div class="s-right">
            <div>8888</div>
            <div>888888</div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <ul>
        <li>
          <a class="active" href="">
            <i class="fa fa-home"></i>
            <p>首页</p>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa fa-rss"></i>
            <p>资讯</p>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa fa-commenting"></i>
            <p>消息</p>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa fa-shopping-cart"></i>
            <p>购物车</p>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa fa-user-circle-o"></i>
            <p>我的</p>
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
  import IScroll from 'iscroll'
  export default {
    name: 'app',
    data () {
      return {
        searchValue: '888888',
        searchShow: false,
        searchResult: [{title: "aa", value: 'bb'}, {title: "cc", value: 'dd'}, {title: "ee", value: 'ff'}]
      }
    },
    methods: {
      searchClick(){
        this.searchShow = true;
      }
    },
    mounted(){
      this.$nextTick(function(){
        var iscroll = new IScroll(this.$refs.iScroll,{
          useTransition: false
        });
      })
    }
  }
</script>

<style lang="scss">
  @import './assets/css/index.scss';
</style>
