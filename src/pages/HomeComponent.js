import TemplateComponent from "../../core/TemplateComponent.js";

export default function HomeComponent() {
    TemplateComponent.apply(this);

    this.render = () => {
        return `
            <div class="container text-center">
                <p>Tired of ReactJS ? Do you think Angular is too heavy ?</p>
                <b>Take a look at our new framework.s</b>
            </div>
        `;
    };
}