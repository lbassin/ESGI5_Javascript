import { routes } from '../../config.js';

export const RouterUtils = function () {
    this.getPathByName = (name) => {
        const route = routes.find((route) => route.name === name);

        if (!route) {
            throw new Error(`Route ${name} doesn't exist`);
        }

        if (route.path === '/') {
            return route.path;
        }

        return '/' + route.path;
    };
};