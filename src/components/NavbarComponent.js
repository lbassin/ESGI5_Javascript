import TemplateComponent from "../../core/TemplateComponent.js";
import { RouterUtils } from "../../core/Utils/router.js";

export default function NavbarComponent() {
    TemplateComponent.apply(this);

    this.router = new RouterUtils();

    this.render = () => {
        const homeRoute = this.router.getPathByName('home');
        const aboutRoute = this.router.getPathByName('about');
        const cameraRoute = this.router.getPathByName('camera');

        return `
            <div style="display: flex;justify-content: space-between;background: red;line-height: 64px;padding: 0 32px;margin-bottom: 12px">
                <div>Javascript</div>
                <div>
                    <ul>
                        <li style="display: inline-block"><a href="${homeRoute}">Home</a></li>
                        <li style="display: inline-block"><a href="${aboutRoute}">Who am I ?</a></li>
                        <li style="display: inline-block"><a href="${cameraRoute}">Who are you?</a></li>
                        <li style="display: inline-block"><a href="/day/12">Which day was it ?</a></li> <!-- TODO -->
                    </ul>
                </div>
            </div>  
        `;
    };
}