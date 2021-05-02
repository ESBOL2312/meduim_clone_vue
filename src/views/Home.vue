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
        <feed-paginator 
          :total="500"
          :limit="10"
          url="/">
        </feed-paginator>
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
import FeedPaginator from '@/components/Paginator.vue'
import {mapActions, mapGetters} from 'vuex'
import {parseUrl, stringify} from 'query-string'
export default {
  name: 'Home',
  data(){
    return{
      loading:false,
      url:'/articles'
    }
  },
  components: {
    FeedCard,
    UserCard,
    FeedPaginator
  },
  filters:{
  
  },
  computed:{
    ...mapGetters([
      'getFeedList',
      'getFL',
      'tags'
    ]),
    CurrentPage(){
      return Number(this.$route.query.page || 1)
    }
  },
  watch:{
    CurrentPage(){
      this.fetchFeed()
    }
  },
  methods:{    
    ...mapActions([
      'getFeed',
      'getTag'
    ]),
    fetchFeed(){
      const psl = parseUrl(this.url)
      const sf = stringify({
        limit:10,
        offset:(this.CurrentPage-1)*10,
        ...psl.query
      })
      const aUrl = `${psl.url}?${sf}`
      this.loading = true
      
      this.getFeed(aUrl)
      .then((data)=>{
        this.loading = false
      })
    },
  },
  created(){
    this.fetchFeed()
    this.getTag()
  }
}
</script>
