import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MovieServiceService } from './../movie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
})
export class AddMoviePage implements OnInit {

  public movieform: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private movieServiceService: MovieServiceService,
    private router:Router
  ) {
    this.movieform = this.formBuilder.group({
      
      Name: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      Release_Date: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      Director_Name: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      Movie_Budget: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    })
  }
  ngOnInit() {
  }

  onSubmit() {
    var save:any= {
      'name': this.movieform.value.Name,
      'Initial_release': this.movieform.value.Release_Date,
      'Director': this.movieform.value.Director_Name,
      'Budget': this.movieform.value.Movie_Budget,
    }
    this.movieServiceService.Movies.push(save);
    this.router.navigateByUrl('/movies-list');

  }
}
