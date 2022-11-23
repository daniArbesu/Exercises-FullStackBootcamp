const showList = (places) => {
    const ulList = document.createElement("ul");
    const divElement = document.querySelector('[data-function="printHere"]');

    for (let place of places){
        const liElement = document.createElement("li");
        liElement.innerText = place;
        ulList.append(liElement);
    }

    divElement.append(ulList);
}

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

  showList(places);