<template>
    <div>
      <div class="article-meta">
        <el-row :gutter="20">
          <el-col :span="16">
            <user-card class="feed-author" :user-name="feedData.author.username" :user-img="feedData.author.image">
            </user-card>
          </el-col>
          <el-col :span="8">
            <div class="flex ju-r">
              <div class="info">
                <span class="">
                  {{feedData.createdAt|dateFormat}}
                </span>
              </div>
              <button>
                {{feedData.favoritesCount}}
              </button>
            </div>     
          </el-col>
        </el-row>
      </div>
      <a class="preview-link">
        <h1>
          {{feedData.title}}
        </h1>
        <p>
          {{feedData.description}}
        </p>
        <span>Read more...</span>
        <template v-if="feedData.tagList">
          <ul v-for="(tag,c) in feedData.tagList" :key="c">
            <li>
              {{tag}}
            </li>
          </ul>
        </template>
      </a>
      <hr>
    </div>
</template>
<script>
import UserCard from '@/components/UserCard.vue'
export default {
   name: 'MUserCard',
   props:{
       feedData:{
           type: Object,
           required: true
       }
    },
    components:{
      UserCard
    },
    filters:{
      dateFormat:(date)=>{
        if (!date) return ''
        return new Date(date).toLocaleDateString()
      }
    }
}
</script>
<style>
.feed-author{
  display: flex;
  align-items: center;
  gap: 10px;
}
.flex{
  display: flex;
}
.ju-r{
  justify-content: flex-end;
}
</style>