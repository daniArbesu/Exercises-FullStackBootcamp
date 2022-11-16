const averageOfFavoriteSounds = (users) =>{
    const usersWithAverage = [];
    for (let user of users){
        let averageVolume = 0;
        let totalVolume = 0;
        let numberOfSounds = Object.keys(user.favoritesSounds).length;

        for (let sound in user.favoritesSounds){
            totalVolume += user.favoritesSounds[sound].volume;
        }
        
        averageVolume = Math.round(totalVolume / numberOfSounds);

    usersWithAverage.push({name: user.name, averageVolume: averageVolume})
    }

    return usersWithAverage;
}



const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Pedro",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Cristina",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];

  console.log(averageOfFavoriteSounds(users));