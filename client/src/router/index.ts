import { createRouter, createWebHistory } from 'vue-router'
import IssueList from '@/components/IssueList.vue'
import IssueDetail from '@/components/IssueDetail.vue'
import IssueForm from '@/components/IssueForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'IssueList',
      component: IssueList
    },
    {
      path: '/issue/:id',
      name: 'IssueDetail',
      component: IssueDetail
    },
    {
      path: '/create',
      name: 'IssueCreate',
      component: IssueForm
    },
    {
      path: '/edit/:id',
      name: 'IssueEdit',
      component: IssueForm
    }
  ]
})

export default router
