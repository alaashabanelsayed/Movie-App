import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  imagePrefix:string="https://image.tmdb.org/t/p/w500"
  constructor(private _hTTPClient:HttpClient) { }

  getTrending(type:string):Observable<any>{
    return this._hTTPClient.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=b4e36574c1dd65bcc5e3e3a5721c15b6`)

  }


getDetails(movieId:string):Observable<any> {
  return this._hTTPClient.get(` https://api.themoviedb.org/3/movie/${movieId}?api_key=b4e36574c1dd65bcc5e3e3a5721c15b6&language=en-US`)
}


getTv(tvId:string):Observable<any>{
  return this._hTTPClient.get(`https://api.themoviedb.org/3/tv/${tvId}}?api_key=b4e36574c1dd65bcc5e3e3a5721c15b6&language=en-US`)

 }
 




}
