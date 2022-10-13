import { Component, OnInit } from '@angular/core';
import { genreCreationDTO } from '../genres.model';


@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  ngOnInit(): void {

  }

  saveChanges(genreCreationDTO:genreCreationDTO){
    console.log(genreCreationDTO);
  }
}
