const swap = (array, index1, index2) => {
    const newArray = array.slice();

    newArray[index1] = array[index2];
    newArray[index2] = array[index1];

    return newArray;
};

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

  console.log(swap(fantasticFour, 2,3));