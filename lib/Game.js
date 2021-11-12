const inquirer = require('inquirer');
const Player = require('./Player');
const Enemy = require('./Enemy');

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

Game.prototype.initializeGame = function () {
    // Initialize enemy data
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    this.currentEnemy = this.enemies[0];
    // Initialize player data
    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?',
        })
        // Destructure name from the prompt object
        .then(({ name }) => {
            this.player = new Player(name);
            this.startNewBattle();
        });
};

module.exports = Game;
