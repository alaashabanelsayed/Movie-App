import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  {path:"" ,redirectTo:"login",pathMatch:"full" },
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"about",canActivate:[AuthGuard],component:AboutComponent},
  // {path:"settings",loadChildren : ()=> import("./seetings/seetings.module").then((res) => res.SeetingsModule)},
  {path:"Tv",canActivate:[AuthGuard],component:TvComponent},
  {path:"tvDetails/:id",canActivate:[AuthGuard],component:TvDetailsComponent},
  {path:"people",canActivate:[AuthGuard],component:PeopleComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"movies",canActivate:[AuthGuard],component:MoviesComponent},
  {path:"movieDetails/:id",canActivate:[AuthGuard],component:MovieDetailsComponent},
  {path:"movie-card",canActivate:[AuthGuard],component:MovieCardComponent},
  {path:"contact",canActivate:[AuthGuard],component:ContactComponent},
  {path:"**",component:NotFoundComponent},
   
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
