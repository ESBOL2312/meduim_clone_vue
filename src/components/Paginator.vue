<template>
  <el-pagination
    background
    :current-page="current"
    layout="prev, pager, next"
    :total="total"
    @current-change="handleCurrentChange"
  >
  </el-pagination>
</template>
<script>
export default {
  name: "MPaginator",
  props: {
    total: {
      required: true,
      type: Number,
    },
    limit: {
      required: true,
      type: Number,
    },
    url: {
      required: true,
      type: String,
    },
    current: {
      required: true,
      type: Number,
    },
  },
  methods: {
    handleCurrentChange(val) {
      this.$router.push({ path: this.url, query: { page: val } });
    },
  },
};
</script>
