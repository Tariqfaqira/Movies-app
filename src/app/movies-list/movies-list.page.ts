import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from './../movie-service.service';
import './51le5tUBQWL.jpg';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {

  constructor(
    private router: Router,
    private movieServiceService: MovieServiceService
  ) { }
  Movies: any;

  ngOnInit() {
    this.Movies = this.movieServiceService.returnMovieList();
  }
  Add_Movie() {
    console.log("Tariq");    
     this.router.navigateByUrl('/add-movie');
  }
  changeUrl(user) {
    const id = user.name;
    console.log("111",id);
    const url = `movies-list/${id}`;
    this.router.navigateByUrl(url);
  }
  ionViewDidEnter() {
    console.log('view Enter');
    this.Movies = this.movieServiceService.returnMovieList();
  }
}
