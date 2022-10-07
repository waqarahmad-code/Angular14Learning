import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexActorComponent } from './actors/index-actor/index-actor.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';
import { CreateMovieTheaterComponent } from './movies-theaters/create-movie-theater/create-movie-theater.component';
import { EditMoviesTheatersComponent } from './movies-theaters/edit-movies-theaters/edit-movies-theaters.component';
import { IndexMovieTheaterComponent } from './movies-theaters/index-movie-theater/index-movie-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMoviesComponent } from './movies/edit-movies/edit-movies.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'genres', component: IndexGenresComponent},
  {path: 'genres/create', component: CreateGenreComponent},
  {path: 'genres/edit/:id', component: EditGenreComponent},

  {path: 'actors', component: IndexActorComponent},
  {path: 'actors/create', component: CreateActorComponent},
  {path: 'actors/edit/:id', component: EditActorComponent},
  {path: 'movietheaters', component: IndexMovieTheaterComponent},
  {path: 'movietheaters/create', component: CreateMovieTheaterComponent},
  {path: 'movietheaters/edit/:id', component: EditMoviesTheatersComponent},

  {path: 'movies/create', component: CreateMovieComponent},
  {path: 'movies/edit/:id', component: EditMoviesComponent},

 // {path: '**', component: HomeComponent},
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
