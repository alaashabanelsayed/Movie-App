import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  trendingPeople:any[]=[];
   imagePrefix:string=''
  constructor(private _moviesService:MoviesService) { }

  ngOnInit(): void {
    this.imagePrefix =this._moviesService.imagePrefix
    this._moviesService.getTrending("person").subscribe({
      next:(res:any)=> this.trendingPeople=res.results })

  }

}
