import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {




  ngOnInit():void{

    // setTimeout(() => {

    //   this.movie={
    //     title: 'Salt',
    //     releaseDate: new Date(),
    //     price: 1400.99
    //   }

    // }, 1000);
  }

  @Input()
  movies:any;

  remove(index:number){
    this.movies.splice(index, 1);
  }

}
