<template>
    <header id="header">
        <div class="logo"><img src="../assets/img/logo200.png" alt="logo" /></div>
        <div class="header-mid"><a href=""><i class="fa fa-search"></i>{{ text }}</a></div>
        <div class="right-btn"><mt-button icon="more"></mt-button></div>
    </header>
</template>

<script>
    export default{
      name:'header',
      data(){
        return{
          text:'搜索'
        }
      },
    }
</script>

<style lang="scss">
    @import '../assets/css/base_value';
    @import '../assets/css/mixin';
    #header{
        position:fixed;
        top:0;
        left:0;
        right:0;
        z-index: 9;
        @include px2rem(height, 80);
        display:flex;
        display:-webkit-flex;
        background-color: $baseColor;
        & > div{
            flex:1;
            &.logo{
                font-size:0;
                @include px2rem(padding, 10);
                text-align:center;
                img{
                    height:100%;
                }
            }
            &.header-mid{
                flex:8;
                @include px2rem(padding,10);
                a{
                    color:#ccc;
                    display:block;
                    background-color:#fff;
                    @include px2rem(height,60);
                    @include px2rem(line-height,60);
                    @include px2px(font-size,36);
                    @include px2px(border-radius,3);
                    i{
                        @include px2rem(padding,15);
                    }
                    &:visited,&:link,&:hover{
                        color:#ccc;
                    }
                }
            }
            &.right-btn{
                font-size:0;
                button{
                    background-color:transparent;
                    width:1.2rem;
                    height:100%;
                    span i{
                        color:#fff;
                        @include px2px(font-size,42);
                    }
                }
            }
        }
    }
</style>