<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="title">Title:</label>
            <input id="title" v-model="form.title" required>
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" v-model="form.description" required></textarea>
        </div>
        <button type="submit">{{ isEdit ? 'Update' : 'Create' }}</button>
        <router-link to="/">Cancel</router-link>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { issueService } from '@/services/IssueService';
import type { CreateIssueDto, UpdateIssueDto } from '@/services/IssueService';

export default defineComponent({
    name: 'IssueForm',
    setup() {
        const route = useRoute();
        const router = useRouter();
        const form = ref<CreateIssueDto>({ title: '', description: '' });
        const isEdit = computed(() => route.name === 'IssueEdit');

        onMounted(async () => {
            if (isEdit.value) {
                const id = Number(route.params.id);
                const issue = await issueService.getIssueById(id);
                form.value = { title: issue.title, description: issue.description };
            }
        });

        const submitForm = async () => {
            if (isEdit.value) {
                const id = Number(route.params.id);
                await issueService.updateIssue(id, form.value as UpdateIssueDto);
            } else {
                await issueService.createIssue(form.value);
            }
            router.push('/');
        };

        return { form, isEdit, submitForm };
    },
});
</script>