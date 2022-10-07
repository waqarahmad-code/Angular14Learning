import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.moviesInTheaters= [{
      title: 'Salt',
      releaseDate: new Date(),
      price: 1400.99,
      poster:'./../assets/poster/salt.png'
    },
    {
      title: 'Moana',
      releaseDate: new Date('2016-11-14'),
      price: 300.99,
      poster:'./../assets/poster/mona.jpg'
    },
    {
      title: 'Spider man',
      releaseDate: new Date(),
      price: 1400.99,
      poster:'./../assets/poster/spider.jpg'
    }

    ];

    this.moviesFutureReleases=[];
  }
  moviesInTheaters;
  moviesFutureReleases;
}
