const findArrayIndex = (array, text) => {
    return array.includes(text) ? array.indexOf(text) : null;
}

const removeItem = (array,text) => {
    const index = findArrayIndex(array,text);
    const newArray = array.slice();

    if (index) newArray.splice(index, 1)

    return  newArray;
}

const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];

  console.log(removeItem(mainCharacters, "Leiad"));