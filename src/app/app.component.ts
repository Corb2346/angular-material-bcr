import { Component, HostListener} from '@angular/core';
import { GetMoviesService } from './services/get-movies.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'material-lab';
  openedSideNav = false;
  movies: any[] = [];  
  indexOfelement?: any;
  constructor(private GetMoviesService : GetMoviesService, public dialog: MatDialog ){

  }


  ngOnInit(): void {
    this.GetMoviesService.getMovies().subscribe({
      next : (resp : any) => {
        this.movies = resp.results;
        console.log("Component: ",this.movies);
        
      }
    })
  }

  openDialog(indexOfelement: any){
    console.log("openDialog: ",indexOfelement);
    this.dialog.open(DialogComponent,{data: indexOfelement} );
  
  }

  clickedIndex(indexOfelement: any){
    console.log("index es: ",indexOfelement);
    
  }

 
 
}

  

