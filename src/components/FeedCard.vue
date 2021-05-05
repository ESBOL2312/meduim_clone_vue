<template>
    <div>
        <div class="article-meta">
            <el-row :gutter="20">
                <el-col :span="16">
                    <user-card
                        class="feed-author"
                        :user-name="feedData.author.username"
                        :user-img="feedData.author.image"
                    >
                    </user-card>
                </el-col>
                <el-col :span="8">
                    <div class="flex ju-r">
                        <div class="info">
                            <span class="">
                                {{ feedData.createdAt | dateFormat }}
                            </span>
                        </div>
                        <favorite-btn
                            :favorite-count="feedData.favoritesCount"
                            :is-favorite="feedData.favorited"
                            :favorite-slug="feedData.slug"
                        >
                        </favorite-btn>
                    </div>
                </el-col>
            </el-row>
        </div>
        <a class="preview-link">
            <h1 class="mb-0">
                {{ feedData.title }}
            </h1>
            <p class="mt-0">
                {{ feedData.description }}
            </p>
            <div v-if="feedData.tagList">
                <tag-list :tag-list="feedData.tagList"></tag-list>
            </div>
            <br />
            <router-link
                :to="{ name: 'article', params: { slug: feedData.slug } }"
            >
                <span>Read more...</span>
            </router-link>
        </a>
        <hr />
    </div>
</template>
<script>
import UserCard from '@/components/UserCard.vue';
import FavoriteBtn from '@/components/FavoriteBtn';
import TagList from '@/components/TagList';

export default {
    name: 'MUserCard',
    props: {
        feedData: {
            type: Object,
            required: true,
        },
    },
    components: {
        UserCard,
        FavoriteBtn,
        TagList,
    },
    filters: {
        dateFormat: (date) => {
            if (!date) return '';
            return new Date(date).toLocaleDateString();
        },
    },
    methods: {},
};
</script>
<style>
.feed-author {
    display: flex;
    align-items: center;
    gap: 10px;
}
.flex {
    display: flex;
}
.ju-r {
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
}
.tag-list .el-tag + .el-tag {
    margin-left: 10px;
    margin-bottom: 10px;
}
</style>
