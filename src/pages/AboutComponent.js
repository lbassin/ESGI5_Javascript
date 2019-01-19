import TemplateComponent from "../../core/TemplateComponent.js";

export function AboutComponent() {
    TemplateComponent.apply(this);

    this.render = () => {
        return 'About';
    };
}