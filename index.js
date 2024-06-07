#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPinCode = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pinQuestion",
        message: "Enter your pin number:",
        type: "number",
    },
]);
if (pinAnswer.pinQuestion === myPinCode) {
    console.log("Correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select what you want to do:",
            type: "list",
            choices: ["withdraw cash", "check your balance", "pass cash"],
        },
    ]);
    if (operationAns.operation === "withdraw cash") {
        let leftAmount = await inquirer.prompt([
            {
                name: "amount",
                message: "enter the amount you want to withdraw:",
                type: "number",
            },
        ]);
        if (leftAmount.amount > 10000) {
            console.log(`Insufficient balance. your current balance is only ${myBalance}`);
        }
        else {
            myBalance -= leftAmount.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check your balance") {
        console.log(`Your current balance is ${myBalance}`);
    }
    else if (operationAns.operation === "pass cash") {
        let passCash = await inquirer.prompt([
            {
                name: "cash",
                message: "Select pass check amount",
                type: "list",
                choices: ["1000", "2500", "5000", "10000"],
            },
        ]);
        if (passCash.cash === "1000") {
            myBalance -= passCash.cash;
            console.log(`Amount withdrew with pass cash, your remaining balance is ${myBalance}`);
        }
        else if (passCash.cash === "2500") {
            myBalance -= passCash.cash;
            console.log(`Amount withdrew with pass cash, your remaining balance is ${myBalance}`);
        }
        else if (passCash.cash === "5000") {
            myBalance -= passCash.cash;
            console.log(`Amount withdrew with pass cash, your remaining balance is ${myBalance}`);
        }
        else if (passCash.cash === "10000") {
            myBalance -= passCash.cash;
            console.log(`Amount withdrew with pass cash, your remaining balance is ${myBalance}`);
        }
    }
}
else {
    console.log("Invalid pin code!");
}
