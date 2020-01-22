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
        <el-menu-item index="0">
          <img src="../assets/img/icon.png" alt />
        </el-menu-item>
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">风格选电影</template>
          <el-menu-item
            v-for="(item,index) in stylechannel"
            :key="index"
            :index="`2-${item.id}`"
          >{{item.style}}</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">位置选电影</template>
          <el-menu-item
            v-for="(item,index) in addresschannel"
            :key="index"
            :index="`3-${item.id}`"
          >{{item.area}}</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">消息中心</el-menu-item>
        <el-menu-item index="5">个人中心</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <el-carousel indicator-position="none" height="460px">
        <el-carousel-item v-for="item in 5" :key="item"></el-carousel-item>
      </el-carousel>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="7">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </el-col>
        <el-col :span="7">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </el-col>
        <el-col :span="7">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </el-col>
      </el-row>
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
      stylechannel: [
      ],
      addresschannel: [
      ]
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
    this.loadStyleChannels()
    this.loadAddresChannels()
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
      // text-align: center;
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
      background: url("../assets/img/01.jpg");
      background-size: cover;
    }
    .el-carousel__item:nth-child(4) {
      background: url("../assets/img/02.jpg");
      background-size: cover;
    }
    .el-carousel__item:nth-child(5) {
      background: url("../assets/img/03.jpg");
      background-size: cover;
    }
    .el-carousel__item:nth-child(6) {
      background: url("../assets/img/04.jpg");
      background-size: cover;
    }
    .el-carousel__item:nth-child(7) {
      background: url("../assets/img/05.jpg");
      background-size: cover;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
    .el-row {
      margin: 20px 0;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col {
      border-radius: 4px;
      .text {
        font-size: 14px;
      }

      .item {
        margin-bottom: 18px;
      }
      .clearfix:before,
      .clearfix:after {
        display: table;
        content: "";
      }
      .clearfix:after {
        clear: both
      }

      .box-card {
        width: 100%;
      }
    }
</style>
