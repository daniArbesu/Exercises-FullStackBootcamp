// 1. Dada la función "printPersons" que recibe un array de objetos llamado "persons",
// y un string "property", completa la función para que recorra dicho array con un
// bucle e invoque un console.log con la propiedad "property" de cada objeto
const printPersons = (persons, property) => {
  for (let person of persons){
    console.log(person[property]);
  }
};

// 2. Crea la función addProperty para que reciba un objeto, una propiedad y valor nuevos,
// y un boolean. Si el boolean es true, que cree una copia de dicho objeto, añada la
// nueva propiedad + valor y lo retorne. Si el boolean es false, que retorne directamente
// el mismo objeto (misma referencia)
const addProperty = (obj, property, newValue, bool) => {
  if (bool){
    const newObject = {... obj};
    newObject[property] = newValue;
    return newObject;
  }
  return obj;
}

// 3. Crea la función getPeopleWeight para que reciba un array con [clave, valor,...]
// donde "clave" es el nombre de las personas y "valor" su peso en kg, y devuelva
// un objeto con solo las personas (clave) y su peso (valor) que tengan un peso
// par y por encima de 60kg.
// Example of array => peopleArr = ["Juan", 72, "Maria", 58, "Martin", 75, "Sofia", 62];
const getPeopleWeight = (arrayPersonasPeso) => {
  const peopleObj = {};
  
  for (let i = 0; i < arrayPersonasPeso.length; i+=2 ){
    if (arrayPersonasPeso[i+1] % 2 === 0 && arrayPersonasPeso[i+1] > 60){
      const key = arrayPersonasPeso[i];
      const value = arrayPersonasPeso[i+1];
      peopleObj[key] = value;
    }
  }
  return peopleObj;
}

// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default {
  printPersons,
  addProperty,
  getPeopleWeight,
};
// ///////////////////////////////////////////////////////////////
