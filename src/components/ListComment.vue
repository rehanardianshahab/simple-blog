<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useRequest } from 'vue-request'
import service from '@/services/blog'

const route = useRoute()

const comment = ref()
const { loading } = useRequest(service.getCommentData(route.params.id), {
    onSuccess: (data) => {
        comment.value = data.data.comments
    }
})

</script>

<template>
    <div class="mt-10 mx-4" v-loading="loading">
        <h2 class="font-semibold text-4xl">Komentar</h2>
        <el-card class="mb-4 mt-2" v-for="list in comment">
            <p class="font-bold text-lg">{{ list.user.username }}</p>
            <p>{{ list.body }}</p>
        </el-card>
    </div>
</template>