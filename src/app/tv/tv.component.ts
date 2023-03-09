import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  trendingTv:any[]=[];
  imagePrefix:string='';
  
 
  constructor(private _moviesService:MoviesService) { }

  ngOnInit(): void {

    this.imagePrefix =this._moviesService.imagePrefix
    this._moviesService.getTrending("tv").subscribe({
      next:(res:any)=> this.trendingTv=res.results })
  }

}
