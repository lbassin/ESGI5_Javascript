import TemplateComponent from "../core/TemplateComponent.js";

export default function NavbarComponent() {
    TemplateComponent.apply(this);

    this.render = () => {
        return `
            <div style="display: flex;justify-content: space-between;background: red;line-height: 64px;padding: 0 32px">
                <div>Javascript</div>
                <div>
                    <ul>
                        <li style="display: inline-block">Home</li>
                        <li style="display: inline-block">Who am I ?</li>
                    </ul>
                </div>
            </div>
        `;
    };
}