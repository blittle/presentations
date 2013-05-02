interface TelescopeInterface {
    name?: string;
    start: () => void;
    stop: () => void;
}

class Telescope implements TelescopeInterface {
    private started: bool;
    public name: string;

    constructor(name: string) {
        this.name = name;
    }        

    start(): void {
        this.started = true;
    }

    stop(): void {
        this.started = false;
    }
}