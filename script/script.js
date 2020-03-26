const containerCards = document.querySelector(".container-cards");

let url = "sujeitoprogramador.com/r-api/?api=filmes" 


async function loadInfos(){
    const response = await fetch('https://' + url);
    const responseJson = await response.json()
    renderCards(responseJson)
}

function renderCards(responseJson){
    responseJson.map(filmes => {
        const {nome, foto, id} = filmes;
        containerCards.innerHTML += `<h3>${nome}</h3>
                                     <div class="container-img">
                                     <img src="${foto}" alt="">
                                     </div>
                                     <a class="load-infos" href="filme.html?id=${id}">Acessar</a>
                                     
    `
    })
}






window.onload = loadInfos

