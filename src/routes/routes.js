// Component
import { Home, WorldCup, Ranking, NotFound } from 'component/index';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/world-cup/:id',
    component: WorldCup,
  },
  {
    path: '/ranking/:id',
    component: Ranking,
  },
  {
    component: NotFound,
  },
];

export default routes;
