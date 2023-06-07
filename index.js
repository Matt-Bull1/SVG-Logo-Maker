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

const writeSVG = (fileName, data) => {
    fs.writeFile(fileName, data, function (err) {
      if (err) {
        console.log(err);
      }
      console.log(`${fileName} has been created`);
    })
  }

async function init(){
    let svgFile = "logo.svg";
    let svgRender = "";

    const answers = await inquirer.prompt(userQuestions);

    let userText = ""
    if (answers.text.length < 4 && answers.text.length > 0){
        userText = answer.text;
    } else {
        console.log("Text must be between 1 and 3 characters");
        return;
    }

    let userTextColor = answers.textColor;

    let userShape = answers.shape;

    let userShapeColor = answers.shapeColor;

    let shapeChoice;

    if (userShape === "Circle") {
        shapeChoice = new Circle();
      }
      else if (userShape === "Triangle") {
        shapeChoice = new Triangle();
      }
      else if (userShape === "Square") {
        shapeChoice = new Square();
      }
      else {
        return null;
      };

    const newSvg = new RenderLogo();
    newSvg.newText(userText, userTextColor);
    newSvg.newShape(userShape, userShapeColor)

    svgRender = newSvg.render();

    writeSVG(svgFile,svgRender);
}

init();