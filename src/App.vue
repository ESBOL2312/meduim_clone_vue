<template>
  <div id="app" class="container mx-auto">
    <el-container>
      <el-header>
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