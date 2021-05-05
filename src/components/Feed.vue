<template>
    <el-col v-loading="loading">
        <div v-if="getFeedList">
            <div v-for="(article, i) in getFeedList.articles" :key="i">
                <feed-card :feed-data="article"></feed-card>
            </div>
        </div>
        <feed-paginator :total="total" :current="CurrentPage" :urll="baseUrl">
        </feed-paginator>
    </el-col>
</template>
<script>
import FeedCard from "@/components/FeedCard.vue";
import UserCard from "@/components/UserCard.vue";
import FeedPaginator from "@/components/Paginator.vue";
import { mapActions, mapGetters } from "vuex";
import { parseUrl, stringify } from "query-string";
export default {
    name: "MFeed",
    data() {
        return {};
    },
    props: {
        total: {
            required: true,
            type: Number,
        },
        limit: {
            required: true,
            type: Number,
        },
        url: {
            required: true,
            type: String,
        },
    },
    components: {
        FeedCard,
        UserCard,
        FeedPaginator,
    },
    computed: {
        ...mapGetters(["getFeedList"]),
        CurrentPage() {
            console.log(11);
            return Number(this.$route.query.page || 1);
        },
        loading() {
            return this.$store.state.feed.getFeedLoading;
        },
        baseUrl() {
            return this.$route.path;
        },
    },
    watch: {
        CurrentPage() {
            this.fetchFeed();
        },
    },
    methods: {
        ...mapActions(["getFeed"]),
        fetchFeed() {
            const psl = parseUrl(this.url);
            const sf = stringify({
                limit: this.limit,
                offset: (this.CurrentPage - 1) * this.limit,
                ...psl.query,
            });
            const aUrl = `${psl.url}?${sf}`;
            this.getFeed(aUrl);
        },
    },
    created() {
        this.fetchFeed();
    },
};
</script>
