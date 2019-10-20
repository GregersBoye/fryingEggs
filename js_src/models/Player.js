class Player {
  constructor(name) {



    this.name = name.replace(',', '');
    this.eggBasket = 10;
    this.rolls = 0;

  }

}

module.exports = Player;
