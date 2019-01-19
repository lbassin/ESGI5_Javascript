import { routes } from '../../config.js';

export const RouterUtils = function () {
    this.getPathByName = (name) => {
        const route = routes.find((route) => route.name === name);

        return route ? route.path : false;
    };
};