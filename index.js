const base_url = "https://api.jikan.moe/v3/anime/1";

function PageLoaded(){
    fetch(base_url)
    .then(res=> res.json())
    .then(data=> console.log(data))
    .catch(err=> console.warn(err.message));
}

window.addEventListener("load", PageLoaded);