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

class AutoScope extends Telescope {        
    constructor() {
        // The call to the parent constructor is mandatory
        super("AutoScope");
    }    

    public move() {
        console.log(this.name, 'Moved');
    }   
}

var autoscope = new AutoScope();
autoscope.move();