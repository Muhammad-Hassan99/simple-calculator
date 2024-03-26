#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        message: "Enter First number",
        type: "number",
        name: "Firstnumber"
    },
    { message: "Enter second Number",
        type: "number",
        name: "Secondnumber" },
    { message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Division", "Multiplication", "Addition", "Subtraction"],
    }]);
if (answer.operator === "Division") {
    console.log(answer.Firstnumber / answer.Secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.Firstnumber * answer.Secondnumber);
}
else if (answer.operator === "Addition") {
    console.log(answer.Firstnumber + answer.Secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.Firstnumber - answer.Secondnumber);
}
else {
    console.log("Please select valid operator");
}
