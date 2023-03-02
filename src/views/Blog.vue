<script setup>
import { ref } from 'vue'
import { useRequest } from 'vue-request'
import { useRouter } from 'vue-router'
import service from '@/services/blog'

const router = useRouter()

const posts = ref()
const { loading } = useRequest(service.getData, {
  onSuccess: (data) => {
    posts.value = data.data.posts
  }
})
</script>

<template>
  <h1 class="text-50px my-8 ml-4">Web Simple Blog</h1>
  <div v-loading="loading">
    <div v-for="list in posts" class="mx-4 rounded-lg mb-4">
      <el-card shadow="hover">
        <p class="text-2xl font-bold">{{ list.title }}</p>
        {{ list.body.substring(0, 250) }}<span @click="router.push('/blog/' + list.id)"
          class="text-blue-500 cursor-pointer">...more</span>
      </el-card>
    </div>
  </div>
</template>
