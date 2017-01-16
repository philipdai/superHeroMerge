import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HeroService {

  constructor(private http: Http) { }

  getHerosAPI(): Observable<any> {
    return this.http.get("https://hero-merge.herokuapp.com/d6c72141/heroes")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error!'));
  }


  createHero(newHero: Hero): Observable<any> {
    return this.http.post("https://hero-merge.herokuapp.com/d6c72141/heroes", {
      hero_name: newHero.hero_name,
      real_name: newHero.real_name,
      gender: newHero.gender,
      attributes: newHero.attributes,
      powers: newHero.powers,
      weaknesses: newHero.weaknesses});
  }

  updateHero(updatedHero: Hero): Observable<any> {
    return this.http.patch("https://hero-merge.herokuapp.com/d6c72141/heroes/" + updatedHero.id, {
      hero_name: updatedHero.hero_name,
      real_name: updatedHero.real_name,
      gender: updatedHero.gender,
      attributes: updatedHero.attributes,
      powers: updatedHero.powers,
      weaknesses: updatedHero.weaknesses
    });
  }


}
