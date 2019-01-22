import TemplateComponent from "../../core/TemplateComponent.js";
import { RouterUtils } from "../../core/Utils/router.js";

export default function NavbarComponent() {
    TemplateComponent.apply(this);

    this.router = new RouterUtils();

    this.render = () => {
        const homeRoute = this.router.getPathByName('home');
        const aboutRoute = this.router.getPathByName('about');
        const cameraRoute = this.router.getPathByName('camera');
        const dayRoute = this.router.getPathByName('day', 12);
        const fileReader = this.router.getPathByName('filereader');

        return `
            <div class="navbar" style="line-height: 64px;margin-bottom: 12px;background: #ecedee;">
                <div class="container" style="display: flex;justify-content: space-between;">
                    <div>Javascript</div>
                    <div>
                        <ul>
                            <li style="display: inline-block;padding: 0 15px;">
                                <a href="${homeRoute}" style="color: #777;text-decoration: none;">Home</a>
                            </li>
                            <li style="display: inline-block;padding: 0 15px;">
                                <a href="${aboutRoute}" style="color: #777;text-decoration: none;">Who am I ?</a>
                            </li>
                            <li style="display: inline-block;padding: 0 15px;">
                                <a href="${cameraRoute}" style="color: #777;text-decoration: none;">Who are you?</a>
                            </li>
                            <li style="display: inline-block;padding: 0 15px;">
                                <a href="${dayRoute}" style="color: #777;text-decoration: none;">Which day was it ?</a>
                            </li>
                            <li style="display: inline-block;padding: 0 15px;">
                                <a href="${fileReader}" style="color: #777;text-decoration: none;">File reader</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>  
        `;
    };
}