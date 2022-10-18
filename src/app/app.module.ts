import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { LifecycletestComponent } from './lifecycletest/lifecycletest.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { IndexActorComponent } from './actors/index-actor/index-actor.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexMovieTheaterComponent } from './movies-theaters/index-movie-theater/index-movie-theater.component';
import { CreateMovieTheaterComponent } from './movies-theaters/create-movie-theater/create-movie-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditMoviesTheatersComponent } from './movies-theaters/edit-movies-theaters/edit-movies-theaters.component';
import { EditMoviesComponent } from './movies/edit-movies/edit-movies.component';
import { FormGenreComponent } from './genres/form-genre/form-genre.component';
import { MoviesFilterComponent } from './movies/movies-filter/movies-filter.component';
import { FormActorComponent } from './actors/form-actor/form-actor.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    LifecycletestComponent,
    CreateGenreComponent,
    HomeComponent,
    IndexGenresComponent,
    IndexActorComponent,
    CreateActorComponent,
    IndexMovieTheaterComponent,
    CreateMovieTheaterComponent,
    CreateMovieComponent,
    EditActorComponent,
    EditGenreComponent,
    EditMoviesTheatersComponent,
    EditMoviesComponent,
    FormGenreComponent,
    MoviesFilterComponent,
    FormActorComponent,
    InputImgComponent,
    InputMarkdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
