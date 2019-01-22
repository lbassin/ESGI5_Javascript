import TemplateComponent from "../../core/TemplateComponent.js";

export default function SwComponent() {
    TemplateComponent.apply(this);

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/src/service_workers/sw.js').then(function(reg) {
            if(reg.installing) {
                console.log('Service worker installing');
            } else if(reg.waiting) {
                console.log('Service worker installed');
            } else if(reg.active) {
                console.log('Service worker active');
            }

        }).catch(function(error) {
            console.log('Registration failed with ' + error);
        });
    }

    this.render = () => {
        return `<div id="galleryContainer" class="container text-center"></div>
            <script>
                let galleryContainer = document.querySelector('#galleryContainer'),
                    gallery = [
                        {
                            name: 'Roller Dog',
                            alt: 'A dog on a skate board',
                            url: '/src/images/roller_dog.jpg',
                        },
                        {
                            name: 'Cat',
                            alt: 'A mad cat',
                            url: '/src/images/cat.jpg',
                        }
                    ];
                
                window.onload = () => {
                    if(typeof gallery === 'object' && gallery.length > 0){
                        for (let i = 0; i < gallery.length; i++) {
                            imgLoad(gallery[i]).then(function(response) {
                                let image = document.createElement('img'),
                                    imageURL = window.URL.createObjectURL(response[0]);
                                        
                                image.setAttribute('alt', response[1].alt);
                                image.src = imageURL;
                                galleryContainer.appendChild(image)
                            })
                        }
                    }
                };
                
                function imgLoad(gallery) {
                    return new Promise(function(resolve, reject) {
                        var request = new XMLHttpRequest();
                        request.open('GET', gallery.url);
                        request.responseType = 'blob';
            
                        request.onload = function() {
                            if (request.status === 200) {
                                var arrayResponse = [];
                                arrayResponse[0] = request.response;
                                arrayResponse[1] = gallery;
                                resolve(arrayResponse);
                            } else {
                                reject(Error('Image didn\\'t load successfully; error code:' + request.statusText));
                            }
                        };
            
                        request.onerror = function() {
                            reject(Error('There was a network error.'));
                        };
            
                        request.send();
                    });
                }
            </script>
        `;
    };
}