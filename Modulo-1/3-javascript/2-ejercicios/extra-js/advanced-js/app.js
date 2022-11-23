// Iteración #1: Arrows

const sum = (a = 10, b = 5) => console.log(a + b);

sum();
sum(3);
sum(2, 3);

// Iteración #2: Destructuring
//2.1
const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, gender, year } = game;

console.log("Title: ", title);
console.log("Gender: ", gender);
console.log("Year: ", year);

//2.2
const fruits = ["Banana", "Strawberry", "Orange"];

const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

//2.3
const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name, race } = animalFunction();
console.log(name);
console.log(race);

//2.4
const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };
const { name: carName, itv } = car;
const [year1, year2, year3] = itv;

console.log(carName);
console.log(itv);
console.log(year1);
console.log(year2);
console.log(year3);

// Iteración #3: Spread Operator
//3.1
const pointsList = [32, 54, 21, 64, 75, 43];
const newPointsList = [...pointsList];
console.log(newPointsList);

//3.2
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyCopy = { ...toy };
console.log(toyCopy);

//3.3
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const pointsListjoin = [...pointsList1, ...pointsList2];
console.log(pointsListjoin);

//3.4
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };
const newToy = { ...toy, ...toyUpdate };
console.log(newToy);

//3.5
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
const newColors = [...colors];
newColors.splice(2, 1);
console.log(newColors);

// Iteración #4: Map
//4.1
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const userNames = users.map((user) => user.name);
console.log(userNames);

//4.2
const userNamesAnacleto = users.map((user) =>
  user.name[0] === "A" ? "Anacleto" : user.name
);
console.log(userNamesAnacleto);

//4.3
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const visitedCities = cities.map((city) =>
  city.isVisited ? city.name + " (Visitado)" : city.name
);
console.log(visitedCities);

// Iteración #5: Filter
//5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const legalAge = ages.filter((age) => age >= 18);
console.log(legalAge);

//5.2
const evenAges = ages.filter((age) => age % 2 === 0);
console.log(evenAges);

//5.3
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamerLOL = streamers.filter(
  (streamer) => streamer.gameMorePlayed === "League of Legends"
);
console.log(streamerLOL);

//5.4
const streamerWithU = streamers.filter((streamer) =>
  streamer.name.includes("u")
);
console.log(streamerWithU);

//5.5
const streamerLeague = streamers.filter((streamer) =>
  streamer.gameMorePlayed.includes("League")
);

streamerLeague.forEach((streamer) => {
  if (streamer.age > 35) {
    streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
  }
});
console.log(streamerLeague);
console.log(streamers);

//5.6
/* const handleInputChange = (event) => {
  const searchStreamers = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(event.target.value.toLowerCase())
  );
  console.log(searchStreamers);
};

const inputField = document.querySelector(
  '[data-function="toFilterStreamers"]'
);

inputField.addEventListener("input", handleInputChange);

//5.7
const handleButtonChange = (event) => {
  const inputField = event.target.previousElementSibling;
  const searchStreamers = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(inputField.value.toLowerCase())
  );
  console.log(searchStreamers);
};

const buttonElement = document.querySelector(
  '[data-function="toShowFilterStreamers"]'
);
buttonElement.addEventListener("click", handleButtonChange); */

// Iteración #6: Find
//6.1
const numbers = [32, 21, 63, 95, 100, 67, 43];
console.log(numbers.find((number) => number === 100));

//6.2
const movies = [
  { title: "Madagascar", stars: 4.5, date: 2015 },
  { title: "Origen", stars: 5, date: 2010 },
  { title: "Your Name", stars: 5, date: 2016 },
];

console.log(movies.find((movie) => movie.date === 2010));

//6.3
const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];

const mutations = [
  {
    name: "Porompompero",
    description:
      "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
  },
  {
    name: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];

const alienCucu = aliens.find((alien) => alien.name === "Cucushumushu");
const mutationPorom = mutations.find(
  (mutation) => mutation.name === "Porompompero"
);

const newAlien = { ...alienCucu, mutation: { ...mutationPorom } };
console.log(newAlien);

// Iteración #7: Reduce
//7.1
const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const sumScores = exams.reduce((acc, next) => acc + next.score, 0);
console.log(sumScores);

//7.2
const sumPassed = exams.reduce(
  (acc, next) => (next.score >= 5 ? acc + next.score : acc),
  0
);
console.log(sumPassed);

//7.3
const averageScore = sumScores / exams.length;
console.log(averageScore);

// Iteración #8: Bonus
//6.1
const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhala", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  {
    name: "Legend of Zelda: Breath of the wild",
    genders: ["RPG", "La cosa más puto bonita que he visto nunca"],
    score: 10,
  },
];

const RPGVideogames = videogames.filter((videogame) =>
  videogame.genders.includes("RPG")
);

const totalRPGScore = RPGVideogames.reduce((acc, next) => acc + next.score, 0);

const averageRPGScore = totalRPGScore / RPGVideogames.length;
console.log(averageRPGScore);
