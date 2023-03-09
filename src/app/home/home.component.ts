import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   trendingMovies:any[]=[];
   trendingTv:any[]=[];
   trendingPeople:any[]=[];
   imagePrefix:string=''
  constructor(private _moviesService:MoviesService) { }

  ngOnInit(): void {
    this.imagePrefix =this._moviesService.imagePrefix
    this._moviesService.getTrending("movie").subscribe({
      next:(res:any)=> this.trendingMovies=res.results.slice(0,10) })
  

      this._moviesService.getTrending("tv").subscribe({
        next:(res:any)=> this.trendingTv=res.results.slice(0,10) })
  
        this._moviesService.getTrending("person").subscribe({
          next:(res:any)=> this.trendingPeople=res.results.slice(0,10) })
    

  }

}
