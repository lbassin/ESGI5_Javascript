import TemplateComponent from "../../core/TemplateComponent.js";

export function HomeComponent() {
    TemplateComponent.apply(this);

    this.render = () => {
        return 'Home2';
    };
}