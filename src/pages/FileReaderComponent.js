import TemplateComponent from "../../core/TemplateComponent.js";

export default function FileReaderComponent() {
    TemplateComponent.apply(this);

    this.render = () => {
        return `
            <div id="fileElementContainer" class="container text-center">
                <input id="fileElement" type="file">
            </div>
            <div id="fileContentContainer" class="container text-center"></div>
            
            <script >
                let fileElement = document.querySelector('#fileElement'), 
                    contentContainer = document.querySelector('#fileContentContainer'), 
                    files,
                    file;
                
                fileElement.addEventListener('change', function(event) {
                    files = fileElement.files;
                    if(files.length > 0) {
                        file = files[0];
                    }
                        
                    if(file){
                        clearContentContainer();
                        printFile(file);
                    }
                }, false);
                
                function printFile(file) {
                    let reader = new FileReader();
                    reader.readAsText(file);
                    reader.onload = function(event) {
                        contentContainer.innerHTML = '<div>' + event.target.result + '</div>';
                    };
                }
                
                function clearContentContainer() {
                    while (contentContainer.hasChildNodes()) {
                        contentContainer.removeChild(contentContainer.lastChild);
                    }                
                }
            </script>
        `;
    };
}