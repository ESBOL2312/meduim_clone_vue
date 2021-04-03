<template>
    <el-row type="flex" class="row-bg" justify="space-between">
        <el-col>
            <router-link class="menu-item" :to="{name:'home'}">
                <h1 class="logo">
                    Medium 
                </h1>
            </router-link>
        </el-col>
        <el-col>
            <el-menu v-if="menuList" class="el-menu-demo" mode="horizontal" >
                <template v-if="isLogin">
                    <template v-if="menuList.authorized">
                        <template v-for="(item,i) in menuList.authorized">
                            <el-menu-item :key="i" :index="i">
                                <router-link :to={name:item.routeName} >
                                    <i :class="item.icon"></i>
                                    <span>
                                        {{item.title}}
                                    </span>
                                </router-link>
                            </el-menu-item>
                        </template>
                    </template>
                </template>
                <template v-if="!isLogin">
                    <template v-if="menuList.unAuthorized">
                        <template v-for="(item,i) in menuList.unAuthorized">
                            <el-menu-item :key="i" :index="i">
                                <router-link :to="{name:item.routeName}" >
                                    <i :class="item.icon"></i>
                                    <span>
                                        {{item.title}}
                                    </span>
                                </router-link>
                            </el-menu-item>
                        </template>
                    </template>
                </template>
                <el-menu-item >
                    <router-link :to="{name:'home'}" >
                        <el-avatar size="medium" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                    </router-link>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>
<script>
import {mapGetters, MapGetters} from 'vuex'
export default {
    name:'MTopMenu',
    props:{
        menuList:{
            required:true,
            type:Object,
        }
    },
    computed:{
        ...mapGetters([
            'isLogin'
        ])
    }
}
</script>
<style>
.el-menu-demo{
    display: flex;
    justify-content: flex-end;
    border-bottom: none !important;
    text-transform: capitalize;
}
.el-menu-item a{
    text-decoration: none !important;
}
.menu-item{
    text-transform: capitalize;
    color:tomato;
    text-decoration: none;
}
.menu-item:hover{
    color:rgb(160, 23, 23);
}
</style>