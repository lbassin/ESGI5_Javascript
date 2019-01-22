import TemplateComponent from "./TemplateComponent.js";

export default function NotFoundComponent() {
    TemplateComponent.apply(this);

    this.render = () => `
        <h1 class="text-center">Not found</h1>
    `;
}