// const fs = require("fs");
// const axios = require("axios");
// const inquirer = require("inquirer");
// const generate = require("./generateMarkdown")





const api = {
  getUser: function (data) {


    const queryUrl = `https://api.github.com/users/${data.username}`;
    axios
      .get(queryUrl)
      .then(res => {
        console.log(res.data);
        // const email = res.data.email;
        const avatar = res.data.avatar_url;
        generate(data)
        // console.log(email);

        fs.appendFile('README.md', data.email, function (err) {
          if (err) throw err;
          console.log("API call complete!");
        })
        module.exports = avatar;
      })



  }
};

module.exports = api;
