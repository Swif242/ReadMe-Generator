const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const getUserApi = require("./utils/api")
const generate = require("./utils/generateMarkdown")


const questions = [
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter your GitHub email: "
    },

    {
        name: "title",
        type: "input",
        message: "Project Title: "
    },
    {
        name: "description",
        type: "input",
        message: "Project Description: "
    },

    {
        name: "installation",
        type: "input",
        message: "Install Instructions: "
    },
    // {
    //     name: "usage",
    //     type: "input",
    //     message: "Usage: "
    // },
    // {
    //     name: "license",
    //     type: "input",
    //     message: "License: "
    // },
    // {
    //     name: "contributing",
    //     type: "input",
    //     message: "Contributing: "
    // },
    // {
    //     name: "test",
    //     type: "input",
    //     message: "Tests: "
    // },

];



function init() {
    // prompt questions
    inquirer.prompt(questions)
        .then(answers => {

            // send answers to generate markdown
            fs.writeFile('README.md', generate(answers), function (err) {
                if (err) throw err;
                console.log("it worked");
                console.log(answers);
            });

            console.log("the file has been saved");
            // send username to axios in api.js for github response data
            getUserApi.getUser(answers);
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
                console.log("dont work bro")
            } else {
                // Something else when wrong
            }
        });

}

init()
