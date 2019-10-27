import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  Movies = [
    {
      name:"Spider-Man: Homecoming",
      Initial_release: "June 28, 2017 (Los Angeles)",
      Director: "Jon Watts",
      Budget: "175 million USD"
    },
    {
      name:"Thor: Ragnarok",
      Initial_release: "October 10, 2017 (Los Angeles)",
      Director: "Taika Waititi",
      Budget: "180 million USD"
    },
    {
      name:"Avengers: Infinity War",
      Initial_release: "April 23, 2018 (Los Angeles)",
      Director: "Anthony Russo",
      Budget: "316 million USD (2018)"
    },
    {
      name:"Captain America: Civil War",
      Initial_release: "May 6, 2016 (Los Angeles)",
      Director: "Joe Russo",
      Budget: "250 million USD"
    },
    {
      name:"Guardians of the Galaxy Vol. 2",
      Initial_release: "April 19, 2017 (Hollywood)",
      Director: "James Gunn",
      Budget: "200 million USD"
    },
    {
      name:"Guardians of the Galaxy",
      Initial_release: "April 19, 2017 (Hollywood)",
      Director: "James Gunn",
      Budget: "200 million USD"
    },
    {
      name:"The Avengers",
      Initial_release: "May 11, 2012(Hollywood)",
      Director: "Joss Whedon",
      Budget: "1.519 billion USD"
    },
    {
      name:"The Hulk",
      Initial_release: "May 11, 2012(Hollywood)",
      Director: "Tariq",
      Budget: "1.519 billion USD"
    },
    {
      name:"Captain Marvel",
      Initial_release: "February 27, 2019 (London)",
      Director: "Mudaasir",
      Budget: "1.519 billion USD"
    },
    {
      name:"Avengers: Endgame",
      Initial_release: "April 22, 2019 (Los Angeles)",
      Director: "Anthony Russo, Joe Russo",
      Budget: "356 million USD (2019)"
    },
    {
      name:"Spider-Man: Far From Home",
      Initial_release: "June 26, 2019(USA)",
      Director: "Jon Watts",
      Budget: "160 million USD (2019)"
    },

  
  ];
  constructor() {}

  returnMovieList() {
    return this.Movies;
  }
  get getMovie() {
    return this.Movies;
  }
  getAllMovie() {
    return this.Movies;
  }

  deleteMovie(id) {
    this.Movies = this.Movies.filter(e => {
      return e.name !== id;
    });
  }
}
