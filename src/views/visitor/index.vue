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
          <img src="../../assets/img/icon.png" alt />
        </el-menu-item>
        <el-menu-item @click="$router.push('/home')" index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">风格选电影</template>
          <el-menu-item
            v-for="(item,index) in stylechannel"
            :key="index"
            :index="`2-${item.id}`"
             @click="$router.push('/search')"
          >{{item.style}}</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">位置选电影</template>
          <el-menu-item
            v-for="(item,index) in addresschannel"
            :key="index"
            :index="`3-${item.id}`"
            @click="$router.push('/search')"
          >{{item.area}}</el-menu-item>
        </el-submenu>
        <el-menu-item index="4" @click="$router.push('/account')">个人中心</el-menu-item>
        <el-menu-item style="float: right;margin-right:40px" index="5">
          <el-input  size="small" v-model="$store.state.searchkeywords" placeholder="搜索电影"> </el-input>
          <el-button @click="$router.push('/search')" type="text" style="background-color:#545c64;color:#fff;margin-left:20px"  icon="el-icon-search"></el-button>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">账户信息修改</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">密码重置</el-tab-pane>
      </el-tabs>
     <el-card>
    <bread-crumb slot="header">
      <template slot="title">个人信息更新</template>
    </bread-crumb>
    <el-form
      :model="formData"
      status-icon
      :rules="rules"
      ref="myForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input type="text" v-model="formData.name" style="width:40%"></el-input>
      </el-form-item>
      <el-form-item label="个人简介" prop="info">
        <el-input type="text" v-model="formData.intro" style="width:40%"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="formData.email" style="width:40%"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="formData.mobile" style="width:40%" disabled></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveUserInfo">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-upload :http-request="uploadImg" class="head-upload" action :show-file-list="true">
      <img :src="formData.photo ? formData.photo : defaultImg" alt />
    </el-upload>
  </el-card>
    </el-main>
    <el-footer>
      <footer class="footer" style="width: 100%;">
        <div class="footer-inner">
          <h3 class="homeico">
            <img src="../../assets/img/icon.png" alt />
          </h3>
          <p class="footer-inner-links">
            <a
              href="https://www.1905.com/about/aboutus/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >关于我们</a>
            <span>|</span>
            <a
              href="https://www.1905.com/sitemap.html?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >网站地图</a>
            <span>|</span>
            <a
              href="https://www.1905.com/jobs/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >诚聘英才</a>
            <span>|</span>
            <a
              href="https://www.1905.com/about/copyright/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >版权声明</a>
            <span>|</span>
            <a
              href="https://www.1905.com/about/contactus/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >联系我们</a>
            <span>|</span>
            <a
              href="https://www.1905.com/error_report/error_report-p-pid-125-cid-126-tid-128.html?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >帮助与反馈</a>
            <span>|</span>
            <a
              href="https://www.1905.com/link/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >友情链接</a>
            <span>|</span>
            <a
              href="https://www.1905.com/cctv6/advertise/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >CCTV6广告招商</a>
            <!--<span>|</span>
            <a href="javascript:void(0)">合作媒体</a>-->
          </p>
          <div class="footer-inner-bottom">
            <a
              href="https://www.1905.com/about/licence/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >网络视听许可证0107199号</a>
            <a
              href="https://www.1905.com/about/cbwjyxkz/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >出版物经营许可证</a>
            <a
              href="https://www.1905.com/about/dyfxjyxkz/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >电影发行经营许可证</a>
            <a
              href="https://www.1905.com/about/jyxyc/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >经营性演出许可证</a>
            <a
              href="https://www.1905.com/about/gbdsjm/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >广播电视节目制作经营许可证</a>
            <br />
            <a
              href="https://www.1905.com/about/beian/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >企业法人营业执照</a>
            <a
              href="https://www.1905.com/about/zzdxyw/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >增值电信业务经营许可证</a>
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010202000300?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >京ICP备12022675号-3</a>
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010202000300"
              target="_blank"
            >京公网安备 11010202000300号</a>
          </div>
        </div>
      </footer>
    </el-footer>
  </el-container>
</template>

<script>
import { getStyleChannels, getAddresChannels } from '@/api/channel.js'
export default {
  data () {
    return {
      formData: {
        name: '', // 用户名
        intro: '', // 简介
        photo: '', // 头像
        email: '', // 邮箱
        mobile: ''
      },
      activeIndex2: '1',
      stylechannel: [],
      addresschannel: [],
      hotfilm: [],
      currentDate: new Date(),
      defaultImg: '../../../assets/img/icon.png',
      rules: {
        name: [
          { required: true, message: '用户名不能为空' },
          {
            min: 1,
            max: 7,
            message: '用户名长度在1到7个字符'
          }
        ],
        email: [
          { required: true, message: '邮箱不能为空' },
          {
            pattern: /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
            message: '邮箱格式不正确'
          }
        ]
      }
    }
  },
  methods: {
    uploadImg (params) {
      this.loading = true // 打开弹层
      let data = new FormData()
      data.append('photo', params.file)
      this.$axios({
        url: '/user/photo',
        method: 'patch',
        data
      }).then(result => {
        this.loading = false // 关闭弹层
        this.formData.photo = result.data.photo // 给当前的头像赋值
        // 认为保存成功 => 通知header组件 更新信息
        // eventBus.$emit('updateUserInfo')
      })
    },
    getuserinfo () {
      this.$axios({
        url: '/user/profile'
      }).then(result => {
        this.formData = result.data
      })
    },
    saveUserInfo () {
      this.$refs.myForm.validate().then(result => {
        //  调用保存接口
        this.$axios({
          url: '/user/profile',
          method: 'patch',
          data: this.formData
        }).then(result => {
          this.$message({
            type: 'success',
            message: '保存用户信息成功'
          })
        })
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    async loadStyleChannels () {
      const { data } = await getStyleChannels()
      this.stylechannel = data.data.items
    },
    async loadAddresChannels () {
      const { data } = await getAddresChannels()
      this.addresschannel = data.data.items
    }
  },
  created () {
    this.loadStyleChannels()
    this.loadAddresChannels()
  }
}
</script>
<style lang="less" scope>
  .head-upload{
    border-radius: 50%;
    position: absolute;
    top: 180px;
    right: 260px;
    img{
      width: 200px;
      height: 200px;
    }
  }
  .el-header,
.el-footer {
  // background-color: #ccc;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-menu-item {
  img {
    height: 100%;
  }
}
body > .el-container {
  margin-bottom: 40px;
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
    clear: both;
  }

  .box-card {
    width: 100%;
  }
}
.el-footer {
  // min-width: 980px;
  // background: #20232c;
  color: #666;
  img {
    height: 80px;
  }
  .footer-inner {
    width: 100%;
    padding: 29px 0 33px;
  }
  .footer-inner,
  .copy-right-conts {
    margin: 0;
    background-color:#545c64;
  }
  .footer-inner-links {
    font: 12px/12px "Microsoft Yahei";
    height: 12px;
    margin-bottom: 8px;
    p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
      }
    a {
    color: #d5d5d5;
    }
  }
  .footer-inner-bottom a {
    font: 12px/28px "Microsoft Yahei";
    color: #858ca1;
    display: inline-block;
    margin-right: 23px;
  }
  a:link, a:visited, a:hover {
    text-decoration: none;
}
}
</style>
