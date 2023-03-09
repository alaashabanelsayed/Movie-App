import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
// declare var $:any
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  trendingMovies:any[]=[];
  imagePrefix:string='';
  searchItem:string=''

  constructor(private _moviesService:MoviesService) { }

  ngOnInit(): void {

    this.imagePrefix =this._moviesService.imagePrefix
    this._moviesService.getTrending("movie").subscribe({
      next:(res:any)=> this.trendingMovies=res.results})
  


  }

}
