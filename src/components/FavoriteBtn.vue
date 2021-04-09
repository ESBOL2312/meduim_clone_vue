<template>
  <el-badge :value="favoritesCount" class="item" type="primary">
    {{isFavorited}}
    <el-button :loading="loading" :type="btntype" circle size="small" icon="el-icon-star-on" @click="favorite(favoriteSlug)">
    </el-button>
  </el-badge>
</template>

<script>
import feedApi from '@/api/feed'
export default {
  name: "MFavoriteBtn",
  data(){
    return {
      favoritesCount: this.favoriteCount,
      isFavorited: this.isFavorite,
      btnType:'',
      loading:false,
    }
  },
  watch:{
    isFavorited:function(){
      this.btntype()
    }
  },
  computed:{
    btntype(){
      return this.isFavorited ? this.btnType='primary':this.btnType=''
    }
  },
  props:{
    favoriteCount:{
      required: true,
      type: Number
    },
    favoriteSlug:{
      required: true,
      type: String
    },
    isFavorite:{
      required: true,
      type: Boolean
    }
  },
  methods:{
    favorite(slug){
      this.loading = !this.loading
      feedApi.favoriteFeed(slug,this.isFavorited).then(()=>{
        this.loading = !this.loading
        this.isFavorited ? this.favoritesCount--:this.favoritesCount++
        this.isFavorited = !this.isFavorited
      })
    }
  }
}
</script>
