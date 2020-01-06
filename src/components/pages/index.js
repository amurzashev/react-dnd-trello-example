import withThemeToggle from '../hocs/withThemeToggle';
import Home from './Home';

export default [
  {
    key: 'Home',
    component: withThemeToggle(Home),
    exact: true,
    path: '/',
  },
];
