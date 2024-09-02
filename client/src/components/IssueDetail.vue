<template>
    <div v-if="issue">
        <h2>{{ issue.title }}</h2>
        <p>{{ issue.description }}</p>
        <p>Created: {{ new Date(issue.createdAt).toLocaleString() }}</p>
        <p>Updated: {{ new Date(issue.updatedAt).toLocaleString() }}</p>
        <router-link :to="{ name: 'IssueEdit', params: { id: issue.id } }">Edit</router-link>
        <button @click="deleteIssue">Delete</button>
        <router-link to="/">Back to List</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { issueService } from '@/services/IssueService';
import type { Issue } from '@/services/IssueService';

export default defineComponent({
    name: 'IssueDetail',
    setup() {
        const route = useRoute();
        const router = useRouter();
        const issue = ref<Issue | null>(null);

        onMounted(async () => {
            const id = Number(route.params.id);
            issue.value = await issueService.getIssueById(id);
        });

        const deleteIssue = async () => {
            if (issue.value) {
                await issueService.deleteIssue(issue.value.id);
                router.push('/');
            }
        };

        return { issue, deleteIssue };
    },
});
</script>