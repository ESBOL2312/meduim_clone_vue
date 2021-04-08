<template>
  <div id="app">
    <el-container>
      <el-header>
        <header-top :menu-list="menuItems" :user-info="currentUser">
        </header-top>
      </el-header>
      <el-main class="container mt-2">
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import HeaderTop from '@/components/TopMenu.vue'
import {mapActions, mapGetters} from 'vuex'
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
            'routeName':'new-article',
            'icon':'el-icon-edit-outline'
          },
          {
            'title':'settings',
            'routeName':'settings',
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
  },
  computed:{
    ...mapGetters([
      'currentUser',
      ])
  },
  methods:{
    ...mapActions([
      'getCurrentUser',
      'getFeed',
      'getSingleFeed'
    ])
  }, 
  created(){
    this.getCurrentUser()
  }
}
</script>