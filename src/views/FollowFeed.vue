<template>
    <div class="home">
        <el-row :gutter="20">
            <el-col :span="16">
                <feed-switch></feed-switch>
                <div class="grid-content bg-purple">
                    <feed-main :total="500" :limit="10" :url="apiUrl">
                    </feed-main>
                </div>
            </el-col>
            <el-col :span="8">
                <div>
                    <feed-tags></feed-tags>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import FeedMain from "@/components/Feed.vue";
import FeedTags from "@/components/Tags.vue";
import FeedSwitch from "@/components/FeedSwitch.vue";
export default {
    name: "Home",
    data() {
        return {
            apiUrl: "articles/feed",
        };
    },
    components: {
        FeedMain,
        FeedTags,
        FeedSwitch,
    },
    computed: {},
};
</script>
