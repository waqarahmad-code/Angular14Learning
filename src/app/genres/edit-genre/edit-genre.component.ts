import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  model:genreCreationDTO={name:"Drama"};

  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(parms=>{

    })
  }

  saveChanges(genreCreationDTO:genreCreationDTO){

  }

}
