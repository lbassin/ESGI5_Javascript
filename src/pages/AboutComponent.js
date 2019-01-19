import TemplateComponent from "../../core/TemplateComponent.js";
import CardComponent from "../components/CardComponent.js";
import Http from "../../core/Utils/http.js";

export default function AboutComponent() {
    TemplateComponent.apply(this);

    const url = 'https://randomuser.me/api/';
    this.http = new Http();

    const getUser = async () => {
        const response = await this.http.get(url);
        if (!response.results || response.results.length <= 0) {
            this.user = {};
        }

        return response.results[0];
    };

    this.render = async () => {
        const card = new CardComponent();

        const user = await getUser();

        const data = {
            title: `Welcome on my website!`,
            img: {
                src: user.picture.large,
                alt: 'User picture'
            },
            content: `
                I am ${user.name.first} ${user.name.last} and i live there: ${user.location.street}
                ${user.location.city} 
            `,
        };

        return `
            <div style="width: 40%;margin: auto;padding-top: 24px;">
                ${await card.display(data)}
            </div>
        `;
    };
}