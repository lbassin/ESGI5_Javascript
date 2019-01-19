export default function Http() {
    this.get = (url) => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open('GET', url);
            xhr.addEventListener('readystatechange', () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) {
                    return;
                }

                if (xhr.status === 200) {
                    let data = null;
                    try {
                        data = JSON.parse(xhr.responseText);
                    } catch (e) {
                        data = xhr.responseText
                    }

                    resolve(data);
                } else if (xhr.status !== 200) {
                    reject(`Ajax request to ${url} failed`);
                }
            });

            xhr.send(null);
        });
    }
}