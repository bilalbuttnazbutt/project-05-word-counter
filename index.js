#! /usr/bin/env node
import inquirer from "inquirer";
const userAns = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence To Count The Word:"
    }
]);
const words = userAns.sentence.trim().split(" ");
console.log(words);
console.log(`your sentence word count is ${words.length}`);
