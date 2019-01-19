import TemplateComponent from "./TemplateComponent.js";

export default function RouterComponent(routes) {
    TemplateComponent.apply(this);

    this.url = document.URL.trim();
    this.routes = routes;

    const initPath = () => {
        const pattern = new RegExp('^https?:\\/\\/[^\\/]+\\/(.+)?', 'i');
        if (!pattern.test(this.url)) {
            throw new Error('Something is wrong with requested URL');
        }

        let path = this.url.match(pattern)[1];
        if (!path) {
            path = '/';
        }

        if (path.length > 1 && path[path.length - 1] === '/') {
            path = path.substr(0, path.length - 1);
        }

        return path;
    };
    this.path = initPath();

    const initComponent = () => {
        const route = this.routes.find((route) => route.path === this.path);

        return route ? route.component : false;
    };
    this.componentName = initComponent();

    if (this.componentName === false) {
        console.error('Throw 404');
    }
    this.component = new this.componentName();

    this.render = () => {
        return this.component.display();
    }
}