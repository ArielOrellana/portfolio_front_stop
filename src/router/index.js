import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/RegisterView.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    children:[
      {
        path: '', 
        component: () => import('../views/user/RutasView.vue')
      },
      {
        path: 'usuario', 
        component: () => import('../views/user/UsuarioView.vue'),
        
      },
      {
        path:'usuario/crear',
        component: () => import('../views/user/UsuarioCrearView.vue')
      },
      {
        path: 'proyectos', 
        component: () => import('../views/user/ProyectoView.vue')
      },
      {
        path: 'estudios', 
        component: () => import('../views/user/EstudiosView.vue')
      },
      {
        path: 'experiencia', 
        component: () => import('../views/user/ExperienciaView.vue')
      },
      {
        path: 'habilidades', 
        component: () => import('../views/user/HabilidadesView.vue')
      },
      {
        path: 'hab-tech', 
        component: () => import('../views/user/HabTechView.vue')
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
