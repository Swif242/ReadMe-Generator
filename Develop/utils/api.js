const axios = require("axios");
const inquirer = require("inquirer");





const api = {
  getUser(username) {
    inquirer
      .prompt({
        message: "Enter your GitHub username",
        name: "username"
      })
      .then(function ({ username }) {
        const queryUrl = `https://api.github.com/users/${username}`;
        axios
          .get(queryUrl)
          .then(res => {
            console.log(res.data);
            const email = res.data.email
            console.log(email);
          });

      });

  }
};

module.exports = api;
