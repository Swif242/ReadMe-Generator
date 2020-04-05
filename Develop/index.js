const fs = require("fs");
const inquirer = require("inquirer");




const questions = [
    {
        name: "name",
        type: "input",
        message:"What is your Username?: "
    },
    {
        name: "title",
        type: "input",
        message:"Project Title: "
    },
    {
        name: "description",
        type: "input",
        message:"Project Description: "
    },
    {
        name: "contents",
        type: "input",
        message:"Table of Contents: "
    },
    {
        name: "installation",
        type: "input",
        message:"Install Instructions: "
    },
    {
        name: "usage",
        type: "input",
        message:"Usage: "
    },
    {
        name: "license",
        type: "input",
        message:"License"
    },
    {
        name: "contributing",
        type: "input",
        message:"Contributing"
    },
    {
        name: "test",
        type: "input",
        message:"Tests: "
    },

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
