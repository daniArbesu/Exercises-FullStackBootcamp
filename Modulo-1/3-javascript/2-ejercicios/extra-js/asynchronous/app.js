//Iteración #1: Fetch
//1.1
fetch("https://api.agify.io?name=michael")
  .then((res) => res.json())
  .then((response) => console.log(response));

//2.3
const addName = (person) => {
  console.log(person);
  const pElement = document.createElement("p");
  let paragraph = `El nombre ${person.name} tiene`;

  for (let country of person.country) {
    const percentage = Math.floor(country.probability * 100);
    paragraph += ` un ${percentage} porciento de ser de ${country.country_id}`;
  }

  pElement.textContent = paragraph;

  document.body.appendChild(pElement);
};

//2.1
const baseUrl = "https://api.nationalize.io";
const buttonElement = document.querySelector("button");

const handleButtonClick = (event) => {
  const inputField = event.target.previousElementSibling;
  const finalUrl = `${baseUrl}?name=${inputField.value}`;

  fetch(finalUrl)
    .then((res) => res.json())
    .then((response) => addName(response));
};

buttonElement.addEventListener("click", handleButtonClick);
