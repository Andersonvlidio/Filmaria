const containerCards = document.querySelector(".container-cards");

const params = new URLSearchParams(window.location.search);


const id = params.get("id");

let url = "https://sujeitoprogramador.com/r-api/?api=filmes/" + id

async function loadFilme(){
    const response = await fetch(url);
    const responseJson = await response.json()
    renderFilme(responseJson)
    console.log(responseJson)
}

function renderFilme(responseJson){
    const {nome, id, sinopse, foto} = responseJson
    containerCards.innerHTML=`  <h3>${nome}</h3>
                                <div class="container-img">
                                <img src="${foto}" alt="">
                                </div> 
                                <h4>Sinopse</h4>
                                <span>${sinopse}</span>`
}

window.onload = loadFilme


