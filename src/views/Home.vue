<template>
  <div class="home">
   <el-row :gutter="20">
    <el-col :span="16">
      <div class="grid-content bg-purple">
        <div v-if="getFeedList">
          <div v-for="(article, i) in getFeedList.articles" :key="i">
            <feed-card :feed-data="article"></feed-card>
          </div>
        </div>
        <el-pagination
        v-loading="getFL" 
          background
          layout="prev, pager, next"
          :total="500"
          @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple">
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
      loading:true
    }
  },
  components: {
    FeedCard,
    UserCard
  },
  computed:{
    ...mapGetters([
      'getFeedList',
      'getFL'
    ])
  },
  methods:{    
    ...mapActions([
      'getFeed',
    ]),
    handleCurrentChange(val){
      let off = (val-1)*10;
      this.getFeed({limit:10,offset:off})
    }
  },
  created(){
    this.getFeed({limit:10,offset:0})
  }
}
</script>
