import HomeComponent from "./src/pages/HomeComponent.js";
import AboutComponent from "./src/pages/AboutComponent.js";
import CameraComponent from "./src/pages/CameraComponent.js";
import DayComponent from "./src/pages/DayComponent.js";
import FileReaderComponent from "./src/pages/FileReaderComponent.js";

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
];