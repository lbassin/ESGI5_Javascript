import { HelloComponentClass } from "./src/HelloComponentClass.js";

let helloComponent = new HelloComponentClass();


let returned = helloComponent.display({
    'toto': 'hello world'
});

Object.prototype.prop_access = function (path) {
    let obj = this;
    if (!path) {
        return this;
    }

    let notFound = false;
    path.split('.').map(key => {
        if (!obj.hasOwnProperty(key)) {
            notFound = true;
            return;
        }

        obj = obj[key];
    });

    if (notFound) {
        throw new Error(`Property ${path} does not exists`)
    }

    return obj;
};
