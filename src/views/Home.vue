<template>
  <div class="home">
   <el-row :gutter="20" v-loading.fullscreen.lock="loading">
    <el-col :span="16">
      <div class="grid-content bg-purple">
        <div v-if="getFeedList">
          <div v-for="(article, i) in getFeedList.articles" :key="i">
            <feed-card :feed-data="article"></feed-card>
          </div>
        </div>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="500"
          @current-change="handleCurrentChange" v-loading.fullscreen.lock="loading">
        </el-pagination>
      </div>
    </el-col>
    <el-col :span="8">
      <div v-if="tags" class="grid-content bg-purple">
        <div class="tag-list">
          <el-tag v-for="tag in tags" :key="tag" >
            {{tag}}
          </el-tag>
        </div>
      </div>
    </el-col>
  </el-row>
  </div>
</template>
<script>
import FeedCard from '@/components/FeedCard.vue'
import UserCard from '@/components/UserCard.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'Home',
  data(){
    return{
      loading:false
    }
  },
  components: {
    FeedCard,
    UserCard
  },
  filters:{
  
  },
  computed:{
    ...mapGetters([
      'getFeedList',
      'getFL',
      'tags'
    ]),
  },
  methods:{    
    ...mapActions([
      'getFeed',
      'getTag'
    ]),
    handleCurrentChange(val){
      let off = (val-1)*10;
      this.loading = true
      this.getFeed({limit:10,offset:off}).then((data)=>{
        this.loading = false
      })
    }
  },
  created(){
    this.loading = true
    this.getFeed({limit:10,offset:0})
    .then((data)=>{
      this.loading = false
    })
    this.getTag()

  }
}
</script>
