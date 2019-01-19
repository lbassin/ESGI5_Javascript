import HomeComponent from "./src/pages/HomeComponent.js";
import AboutComponent from "./src/pages/AboutComponent.js";

export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        name: 'about',
        component: AboutComponent
    }
];