<template>
  <div>
    <el-card>
      <bread-crumb slot="header">
        <template slot="title">
          电影评论管理
          <span style="font-weight:700;color:#ccc">></span> 评论获取
        </template>
      </bread-crumb>
      <el-input v-model="idinput" placeholder="请输入id"></el-input>
      <el-button  type="primary" icon="el-icon-search" @click="getid" circle></el-button>
      <el-divider></el-divider>
      <el-table :data="commData" style="width: 100%">
        <el-table-column prop="create_time" label="日期" width="280" ></el-table-column>
        <el-table-column prop="author" label="留言者" width="180"></el-table-column>
        <el-table-column prop="movie_name" label="电影" width="180"></el-table-column>
        <el-table-column prop="content" label="留言内容"></el-table-column>
      </el-table>
      <el-divider></el-divider>
        <el-pagination background layout="prev, pager, next" :page-count="totalpage" :total="totalcomm"></el-pagination>
    </el-card>
  </div>
</template>

<script>
import { getComm, getidComm } from '@/api/comment.js'
export default {
  data () {
    return {
      idinput: '',
      totalcomm: 0,
      totalpage: 0,
      commData: [
      ]
    }
  },
  methods: {
    async getallcomm () {
      const { data } = await getComm()
      this.commData = data.data.items
      this.totalcomm = data.data.total_elements
      this.totalpage = data.data.total_pages
    },
    async getidcomm (id) {
      const { data } = await getidComm(id)
      this.commData = data.data.items
      this.totalcomm = data.data.total_elements
      this.totalpage = data.data.total_pages
      console.log('执行了')
    },
    getid () {
      this.getidcomm(this.idinput)
    }
    // formattime: function (row, column) {
    //   let datetime = row.create_time
    //   if (datetime) {
    //     return datetime | dateformat('YYYY-MM-DD HH:mm:ss')
    //   }
    //   return ''
    // }
  },
  created () {
    this.getallcomm()
  }
}
</script>

<style>
</style>
