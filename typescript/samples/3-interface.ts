// The interface definition will 
// disappear from the output JS

interface LineOptions {
    x: number;
    m: number;
    b?: number; // Optional attribute  
}

function line(opts: LineOptions) {
    return opts.m * opts.x + (opts.b || 3);
}

line({
    x: 1,
    m: 2
});