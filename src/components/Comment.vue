<template>
    <div>
        <div v-for="(comment, key) in comments.comments" :key="key">
            <div class="comment-card">
                <div class="comment-card__user">
                    <div>
                        <img :src="comment.author.image" alt="" width="35px" />
                        {{ comment.author.username }}
                    </div>
                    {{ comment.createdAt | dateF }}
                </div>
                <div class="comment-card__body">
                    {{ comment.body }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { dateFormat } from "@/service/index";
export default {
    name: "Comments",
    props: {
        slug: {
            type: String,
            required: true,
        },
    },
    methods: {
        ...mapActions(["getComments"]),
    },
    computed: {
        ...mapGetters(["comments"]),
    },
    filters: {
        dateF: dateFormat,
    },
    created() {
        this.getComments(this.slug);
    },
};
</script>
<style>
.comment-card {
    display: flex;
    width: 100%;
    margin-bottom: 10px;
}
.comment-card__user {
    padding: 5px;
    background: #cfcfcf;
}
.comment-card__body {
    width: 100%;
    border: 1px solid #cfcfcf;
    padding: -l;
    padding: 10px;
}
</style>
