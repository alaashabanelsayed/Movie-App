import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {
  tvDetails:any ={}
  baseUrl:string = ''
   tvid:any=""
  constructor(private _activedRoute:ActivatedRoute , private _movieServices:MoviesService) { 
   
   this.baseUrl= this._movieServices.imagePrefix
    this.tvid = this. _activedRoute.snapshot.params['id'];
    this._movieServices.getTv( this.tvid).subscribe({
      next:(res:any) => this.tvDetails=res
    })
   
  
  }

  ngOnInit(): void {
 

  }}
