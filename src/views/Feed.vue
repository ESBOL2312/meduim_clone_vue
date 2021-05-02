`<template>
    <div>
        <el-row>
            {{getSF}}
            <br>
            {{comments}}
            <div v-if="getSF">
                <h3>
                    {{getSF.article.title}}
                </h3>
                <div>
                    <user-card 
                        class="feed-author"
                        :user-name="getSF.article.author.username" 
                        :user-img="getSF.article.author.image"
                    >
                    </user-card>
                    <favorite-btn
                        :favorite-count="getSF.article.favoritesCount"
                        :is-favorite="getSF.article.favorited"
                        :favorite-slug="getSF.article.slug"
                        >
                    </favorite-btn>
                    <span>
                        {{getSF.article.createdAt}}
                    </span>
                </div>
                <div>
                    {{getSF.article.body}}
                </div>
                <div v-if="getSF.article.tagList">
                    <tag-list :tag-list="getSF.article.tagList"></tag-list>
                </div>
            </div>
        </el-row>
    </div>
</template>
<script>
import UserCard from '@/components/UserCard.vue'
import FavoriteBtn from '@/components/FavoriteBtn'
import TagList from '@/components/TagList'
import {mapActions, mapGetters} from 'vuex'
export default {
    name:'MFeed',
    data(){
        return{
            loading:true
        }
    },
    components:{
        FavoriteBtn,
        UserCard,
        TagList
    },
    computed:{
        ...mapGetters([
            'getSF',
            'getFL',
            'comments'
        ])
    },
    methods:{
        ...mapActions([
            'getSingleFeed',
            'getComments'
        ])
    },
    created(){
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        this.getSingleFeed(this.$route.params.slug).then(()=>{
            
            this.loading = false
            console.log(this.loading)
            loading.close();
            console.log('aa')
        })
        this.getComments(this.$route.params.slug)
    }
}
</script>