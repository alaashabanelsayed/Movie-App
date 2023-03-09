import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
movieDetails:any={}
baseUrl:string=''
  movieId:any =''
  constructor(private activedRoute:ActivatedRoute , private _movieServices:MoviesService) { 
    
    this.baseUrl=this._movieServices.imagePrefix
    this.movieId=this.activedRoute.snapshot.params['id'];
    this._movieServices.getDetails(this.movieId).subscribe({
      next:(res:any) =>this.movieDetails=res
    })
    
    
  }

  ngOnInit(): void {
  }

}
