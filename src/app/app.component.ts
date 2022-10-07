import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  ngOnInit(): void {
    // this.moviesInTheaters= [{
    //   title: 'Salt',
    //   releaseDate: new Date(),
    //   price: 1400.99,
    //   poster:'./../assets/poster/salt.png'
    // },
    // {
    //   title: 'Moana',
    //   releaseDate: new Date('2016-11-14'),
    //   price: 300.99,
    //   poster:'./../assets/poster/mona.jpg'
    // },
    // {
    //   title: 'Spider man',
    //   releaseDate: new Date(),
    //   price: 1400.99,
    //   poster:'./../assets/poster/spider.jpg'
    // }

    // ];

    // this.moviesFutureReleases=[];

    // this.moviesFutureReleases;

    // this.moviesFutureReleases= [{
    //   title: 'SALT',
    //   releaseDate: new Date(),
    //   price: 1400.99
    // },
    // {
    //   title: 'Joker',
    //   releaseDate: new Date('2018-11-14'),
    //   price: 300.99
    // },
    // {
    //   title: 'Flip',
    //   releaseDate: new Date(),
    //   price: 1400.99
    // },
    // {
    //   title: 'Monah Bahi',
    //   releaseDate: new Date('2019-11-14'),
    //   price: 300.99
    // },
    // ];
  }

  // moviesInTheaters;
  // moviesFutureReleases;

  title = 'angular-movies';



  duplicateNumber(n: number){
    return n*2;
  }


  handleRating(rate:number){
    alert(`User selected the ${rate}`);
  }

}
