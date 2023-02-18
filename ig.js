import InstaTouch from 'instatouch';

async function scrapeInstagram(username, options) {
    try {
        const data = await InstaTouch.user(username, options);
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const username = 'firis.id';
const options = {
    count: 20,
    mediaType: 'image',
};

scrapeInstagram(username, options);
