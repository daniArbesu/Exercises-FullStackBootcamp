const scoreAverage = (videogames, category="Aventura") => {
    const categoryGames = videogames.filter((videogame) => {
        return videogame.genders.includes(category);
    })

    const scoreSum = categoryGames.reduce((acc, obj) => {
        return acc+obj.score;
    },0);

    return scoreSum/categoryGames.length;
};

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Odissey', genders: ['Plataforma'], score: 8.5},
    {name: 'Diablo III', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Shadow of the Colossus', genders: ['Aventura', 'El mejor videojuego'], score: 10},
];

console.log(scoreAverage(videogames));