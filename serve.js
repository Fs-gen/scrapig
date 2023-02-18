const express = require('express');
const InstaTouch = require('instatouch');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {



    // Set the username of the Instagram account to scrape
    const username = 'wakandacorp';

    // Define the options for the scrape
    const options = {
        mediaType: 'image', // Only scrape images
        count: 10, // The number of posts to scrape
    };

    // Call the scrape function with the username and options
    InstaTouch.user(username, options)
        .then((data) => {
            // The scraped data will be returned in the 'data' object

            if (data) {
                res.send(data);
                // write json file 
                fs.writeFile('wakanda.json', JSON.stringify(data), (err) => {
                    if (err) throw err;
                    console.log('Data written to file');
                });
            } else {
                res.sendFile(__dirname + '/wakanda.json');
            }



            console.log(data);
        })
        .catch((err) => {
            // If an error occurs, it will be caught here
            console.error(err);
        });





});

//route show wakanda json
app.get('/wakanda', (req, res) => {
    res.sendFile(__dirname + '/wakanda.json');
});

app.listen(3200, () => {
    console.log('Server is running on port http://localhost:3200');
});


