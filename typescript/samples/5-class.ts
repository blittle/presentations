class Telescope {
    private started: bool;
    public name: string;

    constructor(name: string) {
        this.name = name;
    }        

    start() {
        this.started = true;
    }

    stop() {
        this.started = false;
    }
}

var telescope = new Telescope("My Telescope");