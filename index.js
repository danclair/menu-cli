#!/usr/bin/env node 

import promptSync from 'prompt-sync';
import chalk from 'chalk';

const prompt = promptSync();

const Breakfast = {
    0: "Water",
    1: "Eggs",
    2: "Toast",
    3: "Coffee"

}
const Lunch = {
    0: "Water",
    1: "Sandwich",
    2: "Chips",
    3: "Soda"
}
const Dinner = {
    0: "Water",
    1: "Steak",
    2: "Potatoes",
    3: "Wine",
    4: "Cake"
}



class Menu {
    constructor() {
        this.order = [];
    }

    promptOrder() {
        const userInput = prompt('What would you like to order? ');
        const orderSplit = userInput.split(' ');
        this.order.push(orderSplit);
        console.log(this.order);
        // console.log(Breakfast[1]);
    }



}


// const order = prompt('What would you like to order? ');
// console.log(chalk.green.bold('You ordered', order));

let obj = new Menu();
obj.promptOrder();
