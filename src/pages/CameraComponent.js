import TemplateComponent from "../../core/TemplateComponent.js";

export default function CameraComponent() {
    TemplateComponent.apply(this);

    this.render = () => {
        return `
            <h1>This is you</h1>
            <video id="video" width="640" height="480" autoplay></video>
            
            <script>
                const video = document.getElementById('video');
    
                if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    navigator.mediaDevices.getUserMedia({ video: true })
                        .then((stream) => {
                            video.srcObject = stream;
                            video.play();
                        });
                } else {
                    alert('Camera is not supported');
                }
            </script>
        `;
    };
}