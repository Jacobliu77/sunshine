<template>
  <div class="layout-aside">
    <div class="title">
      <img src="../../assets/img/icon.png" alt />
    </div>
    <!-- 左侧导航组件  开启路由 :router="true" 或者 router-->
    <el-menu
      router
      background-color="#353b4e"
      text-color="#adafb5"
      active-text-color="#ffd04b"
      :collapse="$store.state.isforder"
    >
      <!-- 没有折叠选项 -->
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </el-menu-item>
      <!-- 二级折叠菜单 -->
      <el-submenu index="1">
        <!-- 具名插槽 -->
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>电影评论管理中心</span>
        </template>
        <!-- 匿名插槽 -->
        <el-menu-item index="/account/comment/getcomm">电影评论管理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <!-- 具名插槽 -->
        <template slot="title">
          <i class="el-icon-video-camera-solid"></i>
          <span>电影管理</span>
        </template>
        <!-- 匿名插槽 -->
        <el-menu-item index="/account/film/addfilm">添加电影</el-menu-item>
        <el-menu-item index="/account/film/getfilminfo">电影操作</el-menu-item>
      </el-submenu>
       <el-submenu index="3">
        <!-- 具名插槽 -->
        <template slot="title">
         <i class="el-icon-s-custom"></i>
          <span>个人中心</span>
        </template>
        <!-- 匿名插槽 -->
        <el-menu-item index="/account/userinfo">账户信息</el-menu-item>
        <el-menu-item index="/account/del">账户删除</el-menu-item>
        <el-menu-item index="/account/resetpass">密码安全</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <!-- 具名插槽 -->
        <template slot="title">
         <i class="el-icon-user-solid"></i>
          <span>管理员账户操作</span>
        </template>
        <!-- 匿名插槽 -->
        <el-menu-item index="/account/admin/find">用户账户查询</el-menu-item>
        <el-menu-item index="/account/admin/all">用户账户信息获取</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
// import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
    }
  },
  created () {
    // eventBus.$on('forderchange', status => {
    //   this.isCollapse = status
    // })
  }
}
</script>

<style lang='less' scoped>
.layout-aside {
  // width: 230px;
  .el-menu {
    border-right: none;
  }
  .title {
    background-color: #2e2f32;
    padding: 10px 0;
    img {
      height: 35px;
    }
  }
}
</style>
