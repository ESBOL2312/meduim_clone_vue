<template>
    <div class="grid-content bg-purple">
        <div class="tag-list" v-if="Boolean(tagsGet)">
            <el-tag v-for="tag in tagsGet" :key="tag">
                <router-link :to="{ name: 'tag', params: { slug: tag } }">
                    {{ tag }}
                </router-link>
            </el-tag>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "MTags",
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["tagsGet"]),
    },
    methods: {
        ...mapActions(["getTag"]),
    },
    created() {
        this.getTag();
    },
};
</script>
