<template>
    <div class="tag-list">
        <el-tag v-for="(tag,c) in TagList" :key="c" effect="dark">
            {{tag}}
        </el-tag>
    </div>
</template>
<script>

export default{
    name:'MTagList',
    props:{
        TagList:{
            required: true,
            type: Array
        }
    }
}
</script>
