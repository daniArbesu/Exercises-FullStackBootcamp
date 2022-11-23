const categorizeByMinutes = (movies) =>{
    const shortMovie = [];
    const mediumLengthMovie = [];
    const largeMovie = [];

    for (let movie of movies){
        if (movie.durationInMinutes < 100) {
            shortMovie.push(movie);
        } else if(movie.durationInMinutes >= 100 && movie.durationInMinutes < 200){
            mediumLengthMovie.push(movie);
        } else largeMovie.push(movie);
    }
    console.log ("Short length movies:", shortMovie);
    console.log ("Medium length movies:", mediumLengthMovie);
    console.log ("Large length movies:", largeMovie);
}

const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];

  categorizeByMinutes(movies);