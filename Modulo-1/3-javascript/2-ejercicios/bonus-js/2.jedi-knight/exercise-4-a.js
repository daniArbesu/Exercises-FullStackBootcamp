const findArrayIndex = (array, text) => {
    return array.includes(text) ? array.indexOf(text) : "Doesn't exist";
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

  console.log(findArrayIndex(mainCharacters, "Leia"));