import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-edit-movies-theaters',
  templateUrl: './edit-movies-theaters.component.html',
  styleUrls: ['./edit-movies-theaters.component.css']
})
export class EditMoviesTheatersComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieTheatersDTO = {name: 'Agora', latitude: 18.483541251864438, longitude: -69.93927597999574};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    });
  }

  saveChanges(movieTheater: movieTheatersCreationDTO){

  }

}
