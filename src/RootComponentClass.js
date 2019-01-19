import { ComponentClass } from "../core/ComponentClass.js";

export function RootComponentClass() {
    ComponentClass.apply(this);

    this.render = () => {
        return "Hello {{ name }}!";
    };
}