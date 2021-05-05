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
                <div v-if="!!tags" class="grid-content bg-purple">
                    <div class="tag-list">
                        <el-tag v-for="tag in tags" :key="tag">
                            {{ tag }}
                        </el-tag>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import FeedMain from "@/components/Feed.vue";
export default {
    name: "Home",
    data() {
        return {
            apiUrl: "articles/",
        };
    },
    components: {
        FeedMain,
    },
    computed: {
        ...mapGetters(["tags"]),
    },
    methods: {
        ...mapActions(["getTag"]),
    },
    created() {
        this.getTag();
    },
};
</script>
