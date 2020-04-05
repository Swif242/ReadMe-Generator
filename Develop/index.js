const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");



const questions = [

    {
        name: "title",
        type: "input",
        message:"Project Title: "
    },
    // {
    //     name: "description",
    //     type: "input",
    //     message:"Project Description: "
    // },
    // {
    //     name: "contents",
    //     type: "input",
    //     message:"Table of Contents: "
    // },
    // {
    //     name: "installation",
    //     type: "input",
    //     message:"Install Instructions: "
    // },
    // {
    //     name: "usage",
    //     type: "input",
    //     message:"Usage: "
    // },
    // {
    //     name: "license",
    //     type: "input",
    //     message:"License: "
    // },
    // {
    //     name: "contributing",
    //     type: "input",
    //     message:"Contributing: "
    // },
    // {
    //     name: "test",
    //     type: "input",
    //     message:"Tests: "
    // },

];



inquirer.prompt(questions)
.then(answers => {
    // Use user feedback for... whatever!!
    var data = JSON.stringify(answers)
    fs.writeFile("responses.txt", data, (err) =>{
        if (err) throw err;
    console.log(answers);
    console.log("the file has been saved");

    });
})
.catch(error => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log("dont work bro")
    } else {
        // Something else when wrong
    }
});

function writeToFile(fileName, data) {
}

function init() {

}

init();
