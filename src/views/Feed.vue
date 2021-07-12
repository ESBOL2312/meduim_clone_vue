<template>
    <div>
        <el-row v-if="getSF" :gutter="20">
            <el-col :span="15">
                <div class="grid-content bg-purple">
                    <h3>
                        {{ getSF.article.title }}
                    </h3>
                    <div>
                        {{ getSF.article.body }}
                    </div>
                    <br />
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
                            {{ getSF.article.createdAt }}
                        </span>
                    </div>
                    <div v-if="getSF.article.tagList">
                        <tag-list :tag-list="getSF.article.tagList"></tag-list>
                    </div>
                </div>
            </el-col>
            <el-col :span="9">
                <comment-tree :slug="slug"></comment-tree>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import UserCard from "@/components/UserCard.vue";
import FavoriteBtn from "@/components/FavoriteBtn";
import TagList from "@/components/TagList";
import CommentTree from "@/components/Comment.vue";
import { mapActions, mapGetters } from "vuex";
export default {
    name: "MFeed",
    data() {
        return {
            loading: true,
        };
    },
    components: {
        FavoriteBtn,
        UserCard,
        TagList,
        CommentTree,
    },
    computed: {
        ...mapGetters(["getSF", "getFL"]),
        slug() {
            return this.$route.params.slug;
        },
    },
    methods: {
        ...mapActions(["getSingleFeed"]),
    },
    created() {
        const loading = this.$loading({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)",
        });
        this.getSingleFeed(this.slug).then(() => {
            this.loading = false;
            console.log(this.loading);
            loading.close();
        });
    },
};
</script>
