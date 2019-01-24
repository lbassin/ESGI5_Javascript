import HomeComponent from "./src/pages/HomeComponent.js";
import AboutComponent from "./src/pages/AboutComponent.js";
import CameraComponent from "./src/pages/CameraComponent.js";
import DayComponent from "./src/pages/DayComponent.js";
import FileReaderComponent from "./src/pages/FileReaderComponent.js";
import NotFoundComponent from "./core/NotFoundComponent.js";
import SwComponent from "./src/pages/SwComponent.js";

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
    },
    {
        path: 'camera',
        name: 'camera',
        component: CameraComponent
    },
    {
        path: /day\/(\d+)/i,
        name: 'day',
        component: DayComponent
    },
    {
        path: 'filereader',
        name: 'filereader',
        component: FileReaderComponent
    },
    {
        path: 'service-worker',
        name: 'serviceWorker',
        component: SwComponent
    }
];

export const notFoundComponet = NotFoundComponent;