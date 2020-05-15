import Vue from 'vue'
import Router from 'vue-router'

// components
import Home from '@/views/Home.vue';
import ListarProdutos from '@/views/Produto/Listar.vue';

Vue.use(Router)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'ListarProdutos',
    path: '/cadastrar',
    component: ListarProdutos
  },
]

const router = new Router({ mode: 'history', routes })

export default router