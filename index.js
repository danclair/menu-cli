#!/usr/bin/env node 

import promptSync from 'prompt-sync';
import chalk from 'chalk';

const prompt = promptSync();

const Meal = {
    "Breakfast": {
        0: "Water",
        1: "Eggs",
        2: "Toast",
        3: "Coffee"
    },
    "Lunch": {
        0: "Water",
        1: "Sandwich",
        2: "Chips",
        3: "Soda"
    },
    "Dinner": {
        0: "Water",
        1: "Steak",
        2: "Potatoes",
        3: "Wine",
        4: "Cake"
    }
}




class Menu {
    constructor() {
        this.order = [];
    };

    promptOrder() {
        const userInput = prompt('What would you like to order? ');
        const orderSplit = userInput.split(' ');

        this.order.push(orderSplit[0].toLowerCase(), orderSplit[1].split(','));
        this.parseOrderType();
        // console.log(this.order);
        // console.log(Breakfast[1]);
    };

    parseOrderType() {
        const mealType = this.order[0];
        // console.log(mealType, mealOptions);

        if (mealType === 'breakfast') {
            // this.orderBreakfast();
            this.orderBreakfast();
        } else if (mealType === 'lunch') {
            this.orderLunch();
        } else if (mealType === 'dinner') {
            this.orderDinner();
        }
    };

    parseOrderOptions() {
        const mealType = this.order[0];
        const mealChoices = this.order[1];
        console.log('mealChoices', mealChoices)
        if (!mealChoices.includes('1') && !mealChoices.includes('2')) {
            console.log("Unable to process: Main is missing, side is missing");
        } else if (!mealChoices.includes('1')) {
            console.log("Unable to process: Main is missing");
        } else if (!mealChoices.includes('2')) {
            console.log("Unable to process: Side is missing");
        }
        if (!mealType.includes('dinner') && !mealChoices.includes('3')) {
            const drink = "Water";
            return drink;
        }
    };

    orderBreakfast() {
        const breakfastOrder = this.parseOrderOptions();
        
    };

    orderLunch() {
        this.parseOrderOptions();
    };

    orderDinner() {
        this.parseOrderOptions();
    };



}


// const order = prompt('What would you like to order? ');
// console.log(chalk.green.bold('You ordered', order));

let obj = new Menu();
obj.promptOrder();
