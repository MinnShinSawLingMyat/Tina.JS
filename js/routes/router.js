import AboutComponent from "../components/about.js";
import DataBindingComponent from "../components/data-binding.js";
import HomeComponent from "../components/home.js";

export const routers = [
    {
        path: '/',
        component: HomeComponent,
    },
    {
        path: '/about',
        component: AboutComponent,
    },
    {
        path: '/data-binding',
        component: DataBindingComponent,
    },
];