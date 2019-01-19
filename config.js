import { HomeComponent } from "./src/HomeComponent.js";
import { AboutComponent } from "./src/AboutComponent.js";

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