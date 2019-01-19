import TemplateComponent from "../../core/TemplateComponent.js";

export default function CardComponent() {
    TemplateComponent.apply(this);

    this.render = () => {
        let output = `
            <div style="border: 1px solid #000;padding: 12px;">
                <h2>${this.props.title}</h2>
                <hr style="margin-bottom: 6px">
        `;

        if (this.props.img) {
            output += `<img src="${this.props.img.src}" alt="${this.props.img.alt}" style="max-width: 100%;">`
        }

        output += `
                <p>${this.props.content}</p>
            </div>
        `;

        return output;
    }
}