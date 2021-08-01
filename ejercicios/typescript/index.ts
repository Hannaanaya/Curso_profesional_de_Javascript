import { create } from "core-js/fn/object";
import { formatDiagnosticsWithColorAndContext, reduceEachTrailingCommentRange } from "typescript";

//function
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(4, 6);

function createAdder(a: number): (number) => number {
    return function(b: number) {
        return b + a;
    };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string = 'Anaya'): string {
    return `${firstName} ${lastName}`;
}

const hanna = fullName('Hanna');
console.log(hanna);

// Interfaces
enum Color {
    Verde = 'Verde',
    Morado = 'Morado',
}

interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Morado,
};

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(`Área: `,areaRect);

rect.toString = function() {
    return  this.color ? `Un rectángulo ${this.color}` : `Un rectángulo`;
};

console.log(rect.toString());