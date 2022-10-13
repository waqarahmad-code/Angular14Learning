import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css']
})
export class MoviesFilterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }


  form!:FormGroup;

  genres=[
    { id: 1, name: 'Drama' },
    { id: 2, name: 'Action' },
    { id: 3, name: 'Comedy' },
    { id: 4, name: 'Thriller' }
  ];

  movies= [{
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

  originalMovies = this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    });


    this.form.valueChanges
    .subscribe(values => {
      this.movies = this.originalMovies;
      this.filterMovies(values);
    });

  }

  filterMovies(values: any){
    if (values.title){
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
    }
  }

  clearForm(){
    this.form.reset();
  }
}
