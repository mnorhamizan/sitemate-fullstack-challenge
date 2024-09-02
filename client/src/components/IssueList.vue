<template>
    <div>
        <h2>Issues</h2>
        <ul>
            <li v-for="issue in issues" :key="issue.id">
                <router-link :to="{ name: 'IssueDetail', params: { id: issue.id } }">
                    {{ issue.title }}
                </router-link>
            </li>
        </ul>
        <router-link to="/create">Create New Issue</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { issueService } from '@/services/IssueService';
import type { Issue } from '@/services/IssueService';

export default defineComponent({
    name: 'IssueList',
    setup() {
        const issues = ref<Issue[]>([]);

        onMounted(async () => {
            issues.value = await issueService.getAllIssues();
        });

        return { issues };
    },
});
</script>