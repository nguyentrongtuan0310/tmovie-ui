import Home from '../pages/Home';
import Category from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import configs from '../config';

const publicRoutes = [
    { component: Home, path: configs.routes.home },
    { component: Category, path: configs.routes.search },
    { component: Category, path: configs.routes.category },
    { component: Detail, path: configs.routes.detail },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
