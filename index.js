import { topanime } from "./script.js";
const base_url = 'https://api.jikan.moe/v4/top/anime';
var topanimes = [];

fetch(base_url).then(res => res.json())
.then(data => {

    for (let index = 0; index < data.data.length; index++) {
        var newobj = {
            name: data.data[index].title,
            image: data.data[index].images.jpg.image_url,
        }
        topanimes.push(newobj);
    }
    topanime(topanimes);
})
.catch(err=> console.log(err))