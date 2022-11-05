// axios module that allows us to send get request to page
const axios = require('axios')
// fs module that allows us to create the new file and write the HTML code to it
const fs = require("fs");
// URL of the site that we're going to request 
const url = "https://32060500.ux.telefloristonline.com";

async function getHtml() {
        // requesting url with axios get function
        axios.get(url)
        .then(function (response) {
            // once the response comes in, the HTML is inside a key called data
            const html = response.data
            // fs writes a the html to a file called index.html in the current dir
            fs.writeFile("index.html", html, (err) => {
                if (err) {
                  console.error(err);
                  return;
                }
                console.log("Successfully written data to ./index.html");
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}

getHtml();