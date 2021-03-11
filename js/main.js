function regSW() {
    if ('serviceworker' in navigator)   navigator.serviceWorker.register('./sw.js');
}