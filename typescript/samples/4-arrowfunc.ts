function timerInit(time: number) {
    var self = this;

    this.active = true;

    setTimeout(function() {
        self.active = false;
    }, time);
}

function timerInit2(time: number) {
    this.active = true;
    
    setTimeout(() => {
        this.active = false;
    }, time);
}