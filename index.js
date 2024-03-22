#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let gameNum = Math.floor(Math.random() * 11);
let userGuess;
//if guess < 10 && guess = 6
// almost there
//if guess = 10
//correct
//if guess > 10
//too high
//if guess < 10
//too low
let guessCount = 0;
do {
    guessCount++;
    userGuess = await inquirer.prompt([
        {
            name: "userGuess",
            type: "number",
            message: "Enter your guess"
        }
    ]);
    if (userGuess.userGuess < gameNum) {
        console.log(chalk.bgRedBright("Too Low"));
    }
    else if (userGuess.userGuess > gameNum) {
        console.log(chalk.bgRedBright("Too High"));
    }
    else if (userGuess.userGuess == gameNum) {
        console.log(chalk.bgGreenBright("Correct"));
    }
} while (userGuess.userGuess != gameNum);
