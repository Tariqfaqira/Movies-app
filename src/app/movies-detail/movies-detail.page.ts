import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MovieServiceService } from './../movie-service.service';
import './51le5tUBQWL.jpg';
@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.page.html',
  styleUrls: ['./movies-detail.page.scss'],
})
export class MoviesDetailPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private movieServiceService: MovieServiceService,
  ) { }

  Movies = [];
  singlemovie;
  ngOnInit() {
    this.Movies = this.movieServiceService.returnMovieList();
    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('movies-detail');
      this.singlemovie = this.Movies.find(obj => {
        return obj.name.includes(val);
      });
    });
  }

  async deleteMovie() {
    console.log('deletemovie', this.singlemovie);

    const alert = await this.alertController.create({
      header: 'Alert',
      message: `Are you sure you want to remove ${this.singlemovie.name}?`,

      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.movieServiceService.deleteMovie(this.singlemovie.name);
            this.router.navigateByUrl('/movies-list');
          }
        }
      ]
    });
    alert.present();
    }

}
