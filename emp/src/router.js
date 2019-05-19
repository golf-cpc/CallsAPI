import Vue from 'vue';
import Router from 'vue-router';
import Request from '@/views/Request.vue'
import Inform from '@/views/Inform.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/main',
    },
    {
      path: '/menu/ors/',
      name: 'menu',
    },
    {
      path: '/main',
      name: 'Request',
      component: Request,
    },
    {
      path: '/inform/',
      name: 'Inform',
      component: Inform,
      children: [
        {
          path: 'OwnerOut',
          name: 'OwnerIn',
        },
        {
          path: 'informer',
          name: 'Informer',
        },
        {
          path: 'OwnerIn',
          name: 'InfHouse1',
        },
        {
          path: 'house2',
          name: 'InfHouse2',
        },
      ],
    },
  ],
});
