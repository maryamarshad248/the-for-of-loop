'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 12,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelievery: function ({
    starterIndex = 1,
    mainIndex = 2,
    time = '20:00',
    address,
  }) {
    // console.log(`order Received! ${this.starterMenu[starterIndex]} and
    //${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
  },
};

restaurant.orderDelievery({
  time: '12:30',
  address: 'Via del sole 22',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelievery({
  time: '20:00',
  address: 'Via del sole,22',
  mainIndex: 1,
  starterIndex: 1,

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
  },
});

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const items of menu) console.log(items);
for (const [i, el] of menu.entries()) {
  //console.log(items);
  console.log(`${i + 1}: ${el}`);
}
const food = [...restaurant.starterMenu];
for (const type of food) console.log(type);
for (const [i, el] of food.entries()) {
  // console.log(type);
  console.log(`${i + 1}: ${el}`);
}

const food1 = [...restaurant.categories];
for (const type1 of food1) console.log(type1);
for (const [i, el] of food1.entries()) {
  console.log(`${i + 1}: ${el}`);
}
