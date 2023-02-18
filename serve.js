const express = require('express');
const InstaTouch = require('instatouch');

const app = express();

app.get('/', (req, res) => {



    // Set the username of the Instagram account to scrape
    const username = 'firis.id';

    // Define the options for the scrape
    const options = {
        count: 20, // The number of posts to scrape
        mediaType: 'image', // Only scrape images
    };

    // Call the scrape function with the username and options
    InstaTouch.user(username, options)
        .then((data) => {
            // The scraped data will be returned in the 'data' object
            res.send(data);
            console.log(data);
        })
        .catch((err) => {
            // If an error occurs, it will be caught here
            console.error(err);
        });





});

app.listen(3200, () => {
    console.log('Server is running on port 3000');
});


