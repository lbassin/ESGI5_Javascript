import { routes } from '../../config.js';
import TypeChecker from "./type_check.js";

export const RouterUtils = function () {
    const typeChecker = new TypeChecker();

    this.getPathByName = (name, ...args) => {
        const route = routes.find((route) => route.name === name);

        if (!route) {
            throw new Error(`Route ${name} doesn't exist`);
        }

        if (typeChecker.check(route.path, {type: 'string'})) {
            return route.path === '/' ? route.path : '/' + route.path;
        }

        if (typeChecker.check(route.path, {type: 'RegExp'})) {
            return remplaceArgsInRegex(route.path, args);
        }

        return '';
    };

    const remplaceArgsInRegex = (path, args) => {
        let output = path.toString();

        const separator = output.charAt(0);
        const lenghtOfRegex = output.lastIndexOf(separator) - 1;

        output = output.substr(1, lenghtOfRegex);
        output = output.replace(/\\\//g, '/');

        let index = 0;
        output = output.replace(/\(.+?\)/g, () => args[index++]);

        return output === '/' ? output : '/' + output;
    }
};