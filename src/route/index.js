import VueRouter from 'vue-router';

import Hello from '../components/hello';
import Todo from '../components/todo';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Hello },
    { path: '/todo', component: Todo },
  ],
});

export default router;
