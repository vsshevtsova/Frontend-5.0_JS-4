//Объект
let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
    while (
      !personalMovieDB.count ||
      isNaN(personalMovieDB.count) ||
      personalMovieDB.count < 0
    ) {
      personalMovieDB.start();
    }
  },
  myLvl: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
      personalMovieDB.start();
    }
  },
  myFilms: function () {
    let film = prompt("Один из последних просмотренных фильмов?");
    let rate = +prompt("На сколько оцените его?");
    if (!film || film.length > 50 || !rate) {
      personalMovieDB.myFilms();
    } else {
      i--;
    }
  },
  askMe: function () {
    for (let i = 0; i < 2; i++) {
      myFilms();
      personalMovieDB.movies[film] = rate;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      personalMovieDB.genres[i - 1] = genre;
      if (!genre || genre.length < 0) {
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
  showMyDB: function () {
    if (personalMovieDB.private == false) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.private == false) {
      personalMovieDB.private = true;
    } else {
      personalMovieDB.private = false;
    }
  },
};
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();
