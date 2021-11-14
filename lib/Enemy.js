const Character = require('./Character');
const Potion = require('../lib/Potion.js');

class Enemy extends Character {
    constructor(name, weapon) {
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();
    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
}

module.exports = Enemy;
