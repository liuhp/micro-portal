import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
// import { buildConfig } from '../../../../config/subapp/config';

Vue.use(Router);

const URL_CONTEXT = '/micro-portal';

const router = new Router({
  base: URL_CONTEXT,
  mode: 'history',
  routes,
});


export default router;
