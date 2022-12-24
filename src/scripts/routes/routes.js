import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Brands from '../views/pages/brands';
import AboutUs from '../views/pages/about-us';

const routes = {
  '/': Home,
  '/home': Home,
  '/brands': Brands,
  '/about-us': AboutUs,
  '/detail/:id': Detail,
};

export default routes;
