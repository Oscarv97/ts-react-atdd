

export class Hero {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    myName() {
        return this.name;
    }
}

let hero = new Hero('Oscar');
console.log(hero.myName());
