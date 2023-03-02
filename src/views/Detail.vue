<script setup>
import { ref } from 'vue'
import { useRequest } from 'vue-request'
import { useRoute } from 'vue-router'
import service from '@/services/blog'
import Comment from '@/components/ListComment.vue'

const route = useRoute()

const posts = ref()
const { loading } = useRequest(service.getDetailData(route.params.id), {
  onSuccess: (data) => {
    posts.value = data.data
  }
})
</script>

<template>
  <div v-loading="loading" class="my-8 ml-4">
    <el-card shadow="hover" class="w-1/2">
      <h1 class="text-40px mb-4">{{ posts?.title }}</h1>
      <span class="text-20px">{{ posts?.body }}</span>
    </el-card>
  </div>
  <Comment />
</template>