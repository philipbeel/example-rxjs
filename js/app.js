class Pin {
    
    static handleKeyboardInput() {
        Rx.Observable.fromEvent(document, 'keyup')
            .debounce(100)
            .map((data) => data.key)
            .filter((key) => !isNaN(Number(key)))
            .take(4)
            .do(input => document.getElementsByTagName('input')[this.inputCount++].value = input)
            .count()
            .last(x => document.getElementById('notification').style.display='block')
            .subscribe(this.inputCount = 0);
    }
}

window.addEventListener("load", Pin.handleKeyboardInput());
