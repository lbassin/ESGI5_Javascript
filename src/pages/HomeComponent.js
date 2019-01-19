import TemplateComponent from "../../core/TemplateComponent.js";

export default function HomeComponent() {
    TemplateComponent.apply(this);

    this.render = () => {
        return 'Home2';
    };
}