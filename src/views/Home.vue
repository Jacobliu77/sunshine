<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="0"><img src="../assets/img/icon.png"  alt=""></el-menu-item>
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">风格选电影</template>
          <el-menu-item v-for="(item,index) in stylechannel" :key="index" :index="`2-${item.id}`">{{item.style}}</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
           <template slot="title">位置选电影</template>
            <el-menu-item v-for="(item,index) in addresschannel" :key="index" :index="`3-${item.id}`">{{item.area}}</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">消息中心</el-menu-item>
        <el-menu-item index="5">个人中心</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <el-carousel indicator-position="outside" height="460px">
        <el-carousel-item v-for="item in 5" :key="item">
        </el-carousel-item>
      </el-carousel>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import { getStyleChannels, getAddresChannels } from '@/api/channel.js'

export default {
  name: 'home',
  components: {},
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      stylechannel: [{
        'id': 1,
        'style': '动作'
      },
      {
        'id': 2,
        'style': '喜剧'
      },
      {
        'id': 3,
        'style': '科幻'
      },
      {
        'id': 4,
        'style': '犯罪'
      },
      {
        'id': 5,
        'style': '爱情'
      },
      {
        'id': 6,
        'style': '悬疑'
      },
      {
        'id': 7,
        'style': '古装'
      }],
      addresschannel: [ {
        'id': 1,
        'area': '内地'
      },
      {
        'id': 2,
        'area': '香港'
      },
      {
        'id': 3,
        'area': '美国'
      },
      {
        'id': 4,
        'area': '泰国'
      },
      {
        'id': 5,
        'area': '其他'
      }]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    async loadStyleChannels () {
      const { data } = await getStyleChannels()
      this.stylechannel = data.data.items
      console.log(this.stylechannel)
    },
    async loadAddresChannels () {
      const { data } = await getAddresChannels()
      this.addresschannel = data.data.items
      console.log(this.addresschannel)
    }
  },
  created () {
    // this.loadStyleChannels()
    // this.loadAddresChannels()
  }
}
</script>
<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #ccc;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-menu-item {
  img {
    height: 100%;
  }
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(3) {
    background: url('../assets/img/01.jpg');
    background-size: cover;
  }
   .el-carousel__item:nth-child(4) {
    background: url('../assets/img/02.jpg');
    background-size: cover;
  }
   .el-carousel__item:nth-child(5) {
    background: url('../assets/img/03.jpg');
    background-size: cover;
  }
   .el-carousel__item:nth-child(6) {
    background: url('../assets/img/04.jpg');
    background-size: cover;
  }
   .el-carousel__item:nth-child(7) {
    background: url('../assets/img/05.jpg');
    background-size: cover;
  }
</style>
