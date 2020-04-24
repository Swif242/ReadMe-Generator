const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generate = require("./Develop/utils/generateMarkdown")


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
    {
        name: "usage",
        type: "input",
        message: "Usage: "
    },
    {
        name: "license",
        type: "input",
        message: "License: "
    },
    {
        name: "contributing",
        type: "input",
        message: "Contributing: "
    },
    {
        name: "test",
        type: "input",
        message: "Tests: "
    },
    {
        name: "deploy",
        type: "input",
        message: "Deployed: "
    },

];



function init() {
    // prompt questions
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);
            const queryUrl = `https://api.github.com/users/${answers.username}`;
            axios
                .get(queryUrl)
                .then(res => {
                    console.log(res.data)
                    const avatar = res.data.avatar_url;

                    // send answers to generate markdown
                    fs.writeFile('Template.md', generate(answers, avatar), function (err) {
                        if (err) throw err;
                        console.log(answers);
                        console.log("it worked");
                        
                    });
                    console.log("the file has been saved");
                    // append email at the end of the questions
                    fs.appendFile('README.md', answers.email, function (err) {
                        if (err) throw err;
                        console.log("API call complete!");
                    })
                    return avatar
                })
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
