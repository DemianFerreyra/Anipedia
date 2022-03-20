import { topanime } from "./script.js";
var topanimes = [];
var reco = [];
var randomid = Math.floor(Math.random() * (200 - 50 + 1) + 50);
console.log(randomid);

fetch('https://api.jikan.moe/v4/top/anime').then(res => res.json())
.then(data => {

    for (let index = 0; index < data.data.length; index++) {
        var newobj = {
            name: data.data[index].title,
            image: data.data[index].images.jpg.image_url,
        }
        topanimes.push(newobj);
    }
    topanime('top', topanimes);
}).catch(err=> console.log(err))

fetch(`https://api.jikan.moe/v4/anime/${randomid}/recommendations`).then(res => res.json())
.then(data2 => {
    for (let i = 0; i < data2.data.length; i++) {
        var newreco = {
            name: data2.data[i].entry.title,
            image: data2.data[i].entry.images.jpg.image_url,
        }
        reco.push(newreco);
    }
    topanime('recomendados', reco);
    console.log(reco.length);
}).catch(err=> console.log(err))


