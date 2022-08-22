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
        // console.log('mealChoices', mealChoices)
        if (!mealType.includes('dinner')) {
            if (!mealChoices.includes('1') && !mealChoices.includes('2')) {
                console.log("Unable to process: Main is missing, side is missing, dessert is missing")
                return;
            } else if (!mealChoices.includes('1')) {
                console.log("Unable to process: Main is missing");
                return;
            } else if (!mealChoices.includes('2')) {
                console.log("Unable to process: Side is missing");
                return;
            } else {
                return this.order;
            }
        } else if (mealType.includes('dinner')) {
            if (!mealChoices.includes('1') && !mealChoices.includes('2') && !mealChoices.includes('4')) {
                    console.log("Unable to process: Main is missing, side is missing, dessert is missing");
                    return;
                } else if (!mealChoices.includes('1')) {
                    console.log("Unable to process: Main is missing");
                    return;
                } else if (!mealChoices.includes('2')) {
                    console.log("Unable to process: Side is missing");
                    return;
                } else if (!mealChoices.includes('4')) {
                    console.log("Unable to process: dessert is missing")
                    return;
                } else {
                    return this.order;
                }
        }
    };

    orderBreakfast() {
        const breakfastOrder = this.parseOrderOptions();
        if (breakfastOrder[1].includes('1') && breakfastOrder[1].includes('2') && breakfastOrder[1].includes('3')) {
            console.log(Meal["Breakfast"][1], Meal["Breakfast"][2], Meal["Breakfast"][3])
        } else if (breakfastOrder[1].includes('1') && breakfastOrder[1].includes('2') && !breakfastOrder[1].includes('3')) {
            console.log(Meal["Breakfast"][1], Meal["Breakfast"][2], "Water")
        }

    };

    orderLunch() {
        const lunchOrder = this.parseOrderOptions();
        if (lunchOrder[1].includes('1') && lunchOrder[1].includes('2') && lunchOrder[1].includes('3')) {
            console.log(Meal["Lunch"][1], Meal["Lunch"][2], Meal["Lunch"][3])
        } else if (lunchOrder[1].includes('1') && lunchOrder[1].includes('2') && !lunchOrder[1].includes('3')) {
            console.log(Meal["Lunch"][1], Meal["Lunch"][2], "Water")
        }
    };

    orderDinner() {
        const dinnerOrder = this.parseOrderOptions();
        if (dinnerOrder[1].includes('1') && dinnerOrder[1].includes('2') && dinnerOrder[1].includes('3') && dinnerOrder[1].includes('4')) {
            console.log(Meal["Dinner"][1], Meal["Dinner"][2], Meal["Dinner"][3], "Water", Meal["Dinner"][4])
        } else if (dinnerOrder[1].includes('1') && dinnerOrder[1].includes('2') && !dinnerOrder[1].includes('3') && dinnerOrder[1].includes('4')) {
            console.log(Meal["Dinner"][1], Meal["Dinner"][2], "Water", Meal["Dinner"][4])
        }
    };



}


// const order = prompt('What would you like to order? ');
// console.log(chalk.green.bold('You ordered', order));

let obj = new Menu();
obj.promptOrder();
