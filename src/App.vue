<template>
  <div id="app" class="container mx-auto">
    <el-container>
      <el-header>
        <header-top :menu-list="menuItems">
          
        </header-top>
        <router-link :to="{name:'home'}">
          medium
        </router-link>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import HeaderTop from '@/components/TopMenu.vue'
export default {
  name:'MMain',
  data(){
    return {
      menuItems:{
        'authorized':[
          {
            'title':'home',
            'routeName':'home',
            'icon':'el-icon-s-home'
          },
          {
            'title':'new article',
            'routeName':'home',
            'icon':'el-icon-edit-outline'
          },
          {
            'title':'settings',
            'routeName':'home',
            'icon':'el-icon-setting'
          }
        ],
        'unAuthorized':[
          {
            'title':'home',
            'routeName':'home',
          },
          {
            'title':'sign in',
            'routeName':'login',
          },
          {
            'title':'sign up',
            'routeName':'register',
          },
        ]
      }
    }
  },
  components:{
    HeaderTop
  }
}
</script>