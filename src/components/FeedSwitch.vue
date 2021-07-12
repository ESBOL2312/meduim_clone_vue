<template>
    <div>
        <ul class="switch-list">
            <li>
                <router-link
                    :to="{ name: 'home' }"
                    :class="{ 'active-link': routeName === 'home' }"
                >
                    Global feed
                </router-link>
            </li>
            <li v-if="isLogin">
                <router-link
                    :to="{ name: 'feed' }"
                    :class="{ 'active-link': routeName === 'feed' }"
                >
                    Your feed
                </router-link>
            </li>
            <li v-if="tag">
                <router-link
                    to="/"
                    :class="{ 'active-link': routeName === 'tag' }"
                >
                    #{{ tag }}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    name: "FeedSwitch",
    props: {
        tag: {
            type: String,
            required: false,
        },
    },
    computed: {
        ...mapGetters(["isLogin"]),
        routeName() {
            return this.$route.name;
        },
    },
};
</script>
<style>
.switch-list {
    display: flex;
    flex-direction: row;
    gap: 15px;
    list-style: none;
    padding-left: 0;
}
</style>
