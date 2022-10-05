import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { GetMoviesService } from './services/get-movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'material-lab';
  openedSideNav = false;
  movies: any[] = [];  

  constructor(private GetMoviesService : GetMoviesService){

  }

  ngOnInit(): void {
    this.GetMoviesService.getMovies().subscribe({
      next : (resp : any) => {
        this.movies = resp.results;
        console.log("Component: ",this.movies);
        
      }
    })
  }

 
}

  

