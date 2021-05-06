<template>
    <div class="home">
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="grid-content bg-purple">
                    <feed-main :total="500" :limit="10" :url="apiUrl">
                    </feed-main>
                </div>
            </el-col>
            <el-col :span="8">
                <div>
                    sdfsdf
                    <feed-tags></feed-tags>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import FeedMain from "@/components/Feed.vue";
import FeedTags from "@/components/Tags.vue";
export default {
    name: "Home",
    data() {
        return {
            apiUrl: "articles/",
        };
    },
    components: {
        FeedMain,
        FeedTags,
    },
    computed: {
        loading() {
            return this.$store.state.feed.getFeedLoading;
        },
    },
};
</script>
