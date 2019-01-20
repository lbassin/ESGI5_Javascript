import TemplateComponent from "../../core/TemplateComponent.js";

export default function DayComponent(day) {
    TemplateComponent.apply(this);

    this.dayNumber = day;

    this.render = () => {
        if (this.dayNumber > 365) {
            return `<p style="text-align: center">I don't think there is more than 365 days in a year :/`;
        }

        return `
            <div id="week" style="text-align: center;">
                <p>
                    The day number ${this.dayNumber} was a <span id="day"></span>
                </p>
            </div>
            
            <script >
                const today = new Date();                
                const count = new Date(today.getFullYear()+'-01-01');
                
                count.setDate(count.getDate() + (${this.dayNumber} - 1));
                
                const day = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(count);
                
                document.querySelector('#week #day').innerText = day;
            </script>
        `;
    };
}