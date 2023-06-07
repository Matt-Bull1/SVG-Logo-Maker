const fs = require('fs');
const inquirer = require('inquirer');

const {Circle, Triangle, Square} = require('./lib/shapes');

const userQuestions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters"
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter up to 3 characters"
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter up to 3 characters"
    }, {
        type: "list",
        name: "shape",
        message: "Choose a Shape",
        choices: ["Circle", "Triangle", "Square"],
    },
]