<template>
    <el-row type="flex" class="row-bg" justify="space-between">
        <el-col>
            <router-link
                class="menu-item"
                :to="{ name: 'home' }"
                active-class="active-link"
                exact
            >
                <h1 class="logo">
                    Medium
                </h1>
            </router-link>
        </el-col>
        <el-col>
            <el-menu v-if="isLoad" class="el-menu-demo" mode="horizontal">
                <template v-if="isLogin">
                    <template v-if="menuList.authorized">
                        <template v-for="(item, i) in menuList.authorized">
                            <el-menu-item :key="i" :index="i">
                                <router-link
                                    :to="{ name: item.routeName }"
                                    active-class="active-link"
                                    exact
                                >
                                    <i :class="item.icon"></i>
                                    <span>
                                        {{ item.title }}
                                    </span>
                                </router-link>
                            </el-menu-item>
                        </template>
                    </template>
                </template>
                <template v-if="!isLogin">
                    <template v-if="menuList.unAuthorized">
                        <template v-for="(item, i) in menuList.unAuthorized">
                            <el-menu-item :key="i" :index="i">
                                <router-link
                                    :to="{ name: item.routeName }"
                                    active-class="active-link"
                                    exact
                                >
                                    <i :class="item.icon"></i>
                                    <span>
                                        {{ item.title }}
                                    </span>
                                </router-link>
                            </el-menu-item>
                        </template>
                    </template>
                </template>
                <el-menu-item>
                    <router-link :to="{ name: 'home' }">
                        <user-card
                            :user-name="userInfo.data.user.username"
                            :user-img="userInfo.data.user.image"
                        >
                        </user-card>
                    </router-link>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>
<script>
import { mapGetters } from 'vuex';
import UserCard from '@/components/UserCard';
export default {
    name: 'MTopMenu',
    components: {
        UserCard,
    },
    props: {
        menuList: {
            required: true,
            type: Object,
        },
        userInfo: {
            required: true,
            type: Object,
        },
    },
    computed: {
        ...mapGetters(['isLogin']),
        isLoad() {
            return this.menuList && this.userInfo ? true : false;
        },
    },
};
</script>
<style>
.el-menu-demo {
    display: flex;
    justify-content: flex-end;
    border-bottom: none !important;
    text-transform: capitalize;
}
.el-menu-item a {
    text-decoration: none !important;
}
.menu-item {
    text-transform: capitalize;
    color: tomato;
    text-decoration: none;
}
.menu-item:hover {
    color: rgb(160, 23, 23);
}
.active-link {
    color: crimson !important;
}
</style>
