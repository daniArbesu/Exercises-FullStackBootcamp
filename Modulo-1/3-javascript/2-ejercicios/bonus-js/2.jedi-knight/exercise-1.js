const showCategories = (movies) => {
    const movieCategories = [];

    for (let movie of movies) {
        for (let categorie of movie.categories) {
            if (!movieCategories.includes(categorie)) movieCategories.push(categorie);
        }
    }
    console.log("Categories:",movieCategories)
};

const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];

  showCategories(movies);