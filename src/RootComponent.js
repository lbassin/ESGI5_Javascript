import TemplateComponent from "../core/TemplateComponent.js";
import RouterComponent from "../core/RouterComponent.js";
import NavbarComponent from "./components/NavbarComponent.js";
import { routes } from "../config.js";

export default function RootComponent() {
    TemplateComponent.apply(this);

    const navbarComponent = new NavbarComponent();
    const routerComponent = new RouterComponent(routes);

    this.render = async () => {
        const navbar = await navbarComponent.display();
        const router = await routerComponent.display();

        return `
            <div> 
                ${navbar}
                ${router}
            </div>
        `;
    };
}