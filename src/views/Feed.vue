`<template>
    <div>
        <el-row v-loading="loading">
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
            </div>
        </el-row>
    </div>
</template>
<script>
import UserCard from '@/components/UserCard.vue'
import FavoriteBtn from '@/components/FavoriteBtn'
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
        UserCard
    },
    computed:{
        ...mapGetters([
            'getSF',
            'getFL'
        ])
    },
    methods:{
        ...mapActions([
            'getSingleFeed'
        ])
    },
    created(){
        this.getSingleFeed(this.$route.params.slug).then(()=>{
            this.loading = false
            console.log(this.loading)
            console.log('aa')
        })
    }
}
</script>