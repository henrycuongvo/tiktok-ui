import Home from "~/pages/Home";
import Following from "~/pages/Following";
//puclic routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/", component: Following },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
