<template>
    <el-pagination
        background
        layout="prev, pager, next"
        :total="500"
        @current-change="handleCurrentChange" v-loading.fullscreen.lock="loading">
    </el-pagination>
</template>
<script>
export default {
    name: 'MPaginator',
    props:{
        total:{
            required: true,
            type: Number
        },
        limit:{
            required: true,
            type: Number
        },
        url:{
            required: true,
            type: String
        }
    },
    methods:{
        handleCurrentChange(val){
            // let off = (val-1)*10;
            // this.loading = true
            // this.getFeed({limit:10,offset:off}).then((data)=>{
            //     this.loading = false
            // })
            this.$router.push({path:this.url,query:{page:val}})
            console.log(val)
        }
    }

}
</script>