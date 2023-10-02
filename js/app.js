const docTitle = document.querySelector('body h1');

console.log(`My ${docTitle.innerText.toLowerCase()}/app.js is being run…`);
const titlePEl = document.createElement('p');
titlePEl.innerHTML = `My <strong>${docTitle.innerText.toLowerCase()}/app.js</strong> is being run…`;
document.querySelector('body').appendChild(titlePEl);

// lecture stuff

// define a class
class Player {
  constructor(username, age, color) {
    this.username = username,
    this.weapons = [],
    this.abilities = [],
    this.health = 100,
    this.age = age,
    this.color = color
  }

  addWeapon(weapon) {
    this.weapons.unshift(weapon);
  }

  addAbility(oneAbility) {
    this.abilities.unshift(oneAbility);
  }
}

//  create a couple
const playerOne = new Player('zach', 18, 'blonde');
playerOne.addAbility('get out of trouble');
// console.log(playerOne.abilities);

const playerTwo = new Player('jessie', 19, 'brunette');

playerTwo.addAbility('get so excited');
// console.log(playerTwo.abilities);

// extend a class
class SuperHero extends Player {
  constructor(username, age, color, superHeroName) {
    // call parent constructor WITHIN this constructor
    super(username, age, color);
    this.hasCoolBackstory = true;
    this.superHeroName = superHeroName;
  }
  fly() {
    return "up up and away!";
  }
}

const superBrad = new SuperHero('braddie', 38, 'salt and pepper', 'Brad the Amazing');
// console.log(superBrad);