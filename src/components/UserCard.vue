<template>
    <div>
        <span>
            {{UserName}}
        </span>
        <el-avatar size="medium" :src="UserImg"></el-avatar>
    </div>
</template>
<script>
export default {
   name: 'MUserCard',
   props:{
       UserName:{
           type: String,
           required: true
       },
       UserImg:{
           type: String,
           required: true
       }
    }
}
</script>