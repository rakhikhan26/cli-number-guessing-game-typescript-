"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
console.log("welcome to cod with rakhi-Cli Guessing game");
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer_1.default.prompt([{
        name: "user GuessedNumber",
        type: "number",
        message: "Enter your guessing number(Number limit from 1to6):",
    }]);
if (answer.userguessingnumber === randomNumber) {
    console.log("congratulation ! You Guess the correct Number.");
}
else {
    console.log("sorry,you guess wrong number");
}
