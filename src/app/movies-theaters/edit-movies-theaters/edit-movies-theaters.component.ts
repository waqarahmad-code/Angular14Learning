import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movies-theaters',
  templateUrl: './edit-movies-theaters.component.html',
  styleUrls: ['./edit-movies-theaters.component.css']
})
export class EditMoviesTheatersComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(parms=>{

    })
  }

}
