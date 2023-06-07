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
    }, 
    {
        type: "list",
        name: "shape",
        message: "Choose a Shape",
        choices: ["Circle", "Triangle", "Square"],
    },
];

class RenderLogo {
    constructor(){
        this.userText = ""
        this.userShape = ""
    };
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.userShape}${this.userText}</svg>`
    };

    setText(text, color){
        this.userText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    };

    setShape(shape){
        this.userShape = shape.render();

    };
};