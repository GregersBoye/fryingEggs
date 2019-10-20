const Player = require('./models/Player');
const [first, second, ...playerNames] = process.argv;
const baskets = [false, false, false, false, false];
console.log(playerNames);
console.log(`${playerNames.length} players have signed up`);
const players = playerNames.map((playerName) => {
  const player = new Player(playerName);
  console.log(`${player.name} has joined the board`);

  return player;

});

let rollCount = 0;
const winnerList = [];
const rollDice = () => {
  return Math.floor(Math.random() * 6)
};
console.log(players);
while (players.length > 0) {
  removeIndexes = [];
  players.forEach((player, index) => {
    const roll = rollDice();
    rollCount++;
    player.rolls++;
    console.log(`player ${player.name} rolled a ${roll + 1}`);

    if (roll === 5) {
      player.eggBasket--;
      console.log(`${player.name} has put an egg in the pan, and has ${player.eggBasket} eggs left`);
    } else {
      if (!baskets[roll]) {
        player.eggBasket--;
        console.log(`${player.name} has put an egg on place #${roll+1}, and has ${player.eggBasket} eggs left`);
      } else {
        player.eggBasket++;
        console.log(`${player.name} has taken an egg from plate #${roll+1}, and has ${player.eggBasket} eggs left`);
      }

      baskets[roll] = !baskets[roll];
      basketState = baskets[roll] ? 'full' : 'empty';
      `basket #${roll + 1} is now ${basketState}`;
    }

    if (player.eggBasket === 0) {
      console.log(`${player.name} has deposited his/her last egg and is done`);
      winnerList.push(player);
      removeIndexes.unshift(index);
    }

  });
  removeIndexes.forEach((indexToRemove) => {

    players.splice(indexToRemove, 1);
  });
}
console.log(`The game is over after ${rollCount} rolls of the dice`);
console.log(winnerList);
