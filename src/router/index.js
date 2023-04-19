import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyView from '../views/MyView.vue'
import ClinicView from '../views/ClinicView.vue'
import HelperView from '../views/HelperView.vue'
import VaccineList from '../views/VaccineList.vue'
import VaccineForm from '../views/VaccineForm.vue'
import VaccineOrder from '../views/VaccineOrder.vue'
import VaccineView from '../views/VaccineView.vue'
import VaccineDone from '../views/VaccineDone.vue'
import ArticleList from '../views/ArticleList.vue'
import ArticleView from '../views/ArticleView.vue'
import ContactsAdd from '../views/ContactsAdd.vue'
import ContactsList from '../views/ContactsList.vue'
import AppointList from '../views/AppointList.vue'
import OrderList from '../views/OrderList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/appoint-list',
    name: 'appoint-list',
    component: AppointList
  },
  {
    path: '/order-list',
    name: 'order-list',
    component: OrderList
  },
  {
    path: '/clinic',
    name: 'clinic',
    component: ClinicView
  },
  {
    path: '/helper',
    name: 'helper',
    component: HelperView
  },
  {
    path: '/vaccine-list',
    name: 'vaccine-list',
    component: VaccineList
  },
  {
    path: '/vaccine-form',
    name: 'vaccine-form',
    component: VaccineForm
  },
  {
    path: '/vaccine-order',
    name: 'vaccine-order',
    component: VaccineOrder
  },
  {
    path: '/vaccine-view',
    name: 'vaccine-view',
    component: VaccineView
  },
  {
    path: '/vaccine-done',
    name: 'vaccine-done',
    component: VaccineDone
  },
  {
    path: '/article-list',
    name: 'article-list',
    component: ArticleList
  },
  {
    path: '/article-view',
    name: 'article-view',
    component: ArticleView
  },
  {
    path: '/contacts-add',
    name: 'contacts-add',
    component: ContactsAdd
  },
  {
    path: '/contacts-list',
    name: 'contacts-list',
    component: ContactsList
  },
  {
    path: '/my',
    name: 'my',
    component: MyView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
