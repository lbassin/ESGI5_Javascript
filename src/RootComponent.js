import TemplateComponent from "../core/TemplateComponent.js";
import RouterComponent from "../core/RouterComponent.js";
import NavbarComponent from "./NavbarComponent.js";
import { routes } from "../config.js";

export default function RootComponent() {
    TemplateComponent.apply(this);

    const navbarComponent = new NavbarComponent();
    const routerComponent = new RouterComponent(routes);

    this.render = () => {
        const navbar = navbarComponent.display();
        const router = routerComponent.display();

        return `
            <div> 
                ${navbar}
                ${router}
            </div>
        `;
    };
}