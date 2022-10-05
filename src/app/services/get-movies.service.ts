import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  constructor(private http : HttpClient) { }

  getMovies():Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/trending/all/day?api_key=cf3eb7692b91ccc3a9311e96ce7a5987').pipe(
      map( (resp:any) => {
        console.log(resp);
        return resp;
      })
    )
  }

}
