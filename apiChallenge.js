const baseUrl = "https://dog.ceo/api/breed/";
const endUrl = "/images/random";
const randomUrl ="https://dog.ceo/api/breeds/image/random";

async function fetchbreeds () {
    // Discovered dashes needed to be replaced with slashes from options in Id dogBreed
    var dogBreedNoDash = document.getElementById("dogBreed").value.toLowerCase().replace(/-/g,'/');
    var url = baseUrl + dogBreedNoDash + endUrl;
    const response = await fetch (url);
    let data = await response.json();


    return data;
}

async function search() {
    var data = await fetchbreeds();
    document.getElementById("results").src = data.message;
    document.getElementById("results").hidden ="";

}

async function random() {
    const response = await fetch (randomUrl);
    let data = await response.json();
    document.getElementById("results").src = data.message;
    document.getElementById("results").hidden ="";

}