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

    };

    parseOrderType() {
        const mealType = this.order[0];

        if (mealType === 'breakfast') {
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
                console.log("Unable to process: Main is missing, side is missing")
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
                    return this.order[1];
                }
        }
    };

    orderBreakfast() {
        const breakfastOrder = this.order[1];
        if (breakfastOrder.includes('1') && breakfastOrder.includes('2') && breakfastOrder.includes('3')) {
            console.log(Meal["Breakfast"][1], Meal["Breakfast"][2], Meal["Breakfast"][3])
        } else if (breakfastOrder.includes('1') && breakfastOrder.includes('2') && !breakfastOrder.includes('3')) {
            console.log(Meal["Breakfast"][1], Meal["Breakfast"][2], "Water")
        } else if (!breakfastOrder.includes('1') && !breakfastOrder.includes('2')) {
            console.log("Unable to process: Main is missing, side is missing");
            return;
        } else if (!breakfastOrder.includes('1') && breakfastOrder.includes('2')) {
            console.log("Unable to process: Main is missing");
            return;
        } else if (breakfastOrder.includes('1') && !breakfastOrder.includes('2')) {
            console.log("Unable to process: Side is missing");
            return;
        }
    };

    orderLunch() {
        const lunchOrder = this.order[1];
        if (lunchOrder.includes('1') && lunchOrder.includes('2') && lunchOrder.includes('3')) {
            console.log(Meal["Lunch"][1], Meal["Lunch"][2], Meal["Lunch"][3])
        } else if (lunchOrder.includes('1') && lunchOrder.includes('2') && !lunchOrder.includes('3')) {
            console.log(Meal["Lunch"][1], Meal["Lunch"][2], "Water")
        } else if (!lunchOrder.includes('1') && !lunchOrder.includes('2')) {
            console.log("Unable to process: Main is missing, side is missing");
            return;
        } else if (!lunchOrder.includes('1') && lunchOrder.includes('2')) {
            console.log("Unable to process: Main is missing");
            return;
        } else if (lunchOrder.includes('1') && !lunchOrder.includes('2')) {
            console.log("Unable to process: Side is missing");
            return;
        }
    };

    orderDinner() {
        const dinnerOrder = this.order[1];
        if (dinnerOrder.includes('1') && dinnerOrder.includes('2') && dinnerOrder.includes('3') && dinnerOrder.includes('4')) {
            console.log(Meal["Dinner"][1], Meal["Dinner"][2], Meal["Dinner"][3], "Water", Meal["Dinner"][4])
        } else if (dinnerOrder.includes('1') && dinnerOrder.includes('2') && !dinnerOrder.includes('3') && dinnerOrder.includes('4')) {
            console.log(Meal["Dinner"][1], Meal["Dinner"][2], "Water", Meal["Dinner"][4])
        } else if (!dinnerOrder.includes('1') && !dinnerOrder.includes('2') && !dinnerOrder.includes('4')) {
            console.log("Unable to process: Main is missing, side is missing, dessert is missing");
            return;
        } else if (!dinnerOrder.includes('1') && !dinnerOrder.includes('2') && dinnerOrder.includes('4')) {
            console.log("Unable to process: Main is missing, side is missing");
            return;
        } else if (!dinnerOrder.includes('1') && dinnerOrder.includes('2') && !dinnerOrder.includes('4')) {
            console.log("Unable to process: Main is missing, dessert is missing");
            return;
        } else if (dinnerOrder.includes('1') && !dinnerOrder.includes('2') && !dinnerOrder.includes('4')) {
            console.log("Unable to process: Side is missing, dessert is missing");
            return;
        } else if (dinnerOrder.includes('1') && !dinnerOrder.includes('2') && dinnerOrder.includes('4')) {
            console.log("Unable to process: Side is missing");
            return;
        } else if (!dinnerOrder.includes('1') && dinnerOrder.includes('2') && dinnerOrder.includes('4')) {
            console.log("Unable to process: Main is missing");
            return;
        } else if (dinnerOrder.includes('1') && dinnerOrder.includes('2') && !dinnerOrder.includes('4')) {
            console.log("Unable to process: Dessert is missing");
            return;
        }
    };



}

let obj = new Menu();
obj.promptOrder();
