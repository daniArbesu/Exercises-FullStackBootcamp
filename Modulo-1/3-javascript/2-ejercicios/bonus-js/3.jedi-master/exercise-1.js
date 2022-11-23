const showAlbums = (albums) => {
    const ulList = document.createElement("ul");

    for (let album of albums){
        const liElement = document.createElement("li");
        liElement.innerText = album;
        ulList.append(liElement);
    }
    document.body.append(ulList);
}

const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];

  showAlbums(albums);