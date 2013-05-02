// The splat should be the last or only parameter

function line( x: number, ...params: number[] ): number {        
    return params[0] * x + params[1]; 
}