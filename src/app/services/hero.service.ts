import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HeroService {
  private _heroList: BehaviorSubject<Hero[]>;
  private dataStore: {
    heroList: Hero[]
  };
  private baseUrl: string;
  private baseApiUrl: string;
  private _apiKey: BehaviorSubject<string>;
  private apiKey: string;

  constructor(private http: Http) {
    this.baseUrl = "https://hero-merge.herokuapp.com/";
    this.baseApiUrl = "https://hero-merge.herokuapp.com/getApiKey";
    this.dataStore = { heroList: []};
    this._heroList = <BehaviorSubject<Hero[]>> new BehaviorSubject([]);
    this._apiKey = <BehaviorSubject<string>> new BehaviorSubject('');
    this.apiKey = "";
  }

  get heroList() {
    return this._heroList.asObservable();
  }

  loadAll() {
    this.http.get(`${this.baseApiUrl}`).map((res: Response) => {
      return res.json()
    }).subscribe(data => {
      this.apiKey = data.apiKey;
      this._apiKey.next(Object.assign({}, this.apiKey));
      this.http.get(`${this.baseUrl}${data.apiKey}/heroes`)
        .map((res: Response) => {
          return res.json();
        }).subscribe(
        (res) => {
          this.dataStore.heroList = res;
          // console.log("res: ", res);
          this._heroList.next(Object.assign({}, this.dataStore).heroList);
        },
        (error) => {
          console.log('Could not load heroes.')
        }
      );
    }, error => console.log('Could not load apiKey.'));
  }

  getHerosAPI(): Observable<any> {
    console.log('this.apiKey: ', this.apiKey);
    return this.http.get("https://hero-merge.herokuapp.com/" + this.apiKey + "/heroes")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error!'));
  }


  createHero(newHero: Hero): Observable<any> {
    return this.http.post("https://hero-merge.herokuapp.com/" + this.apiKey + "/heroes", {
      hero_name: newHero.hero_name,
      real_name: newHero.real_name,
      gender: newHero.gender,
      attributes: newHero.attributes,
      powers: newHero.powers,
      weaknesses: newHero.weaknesses});
  }

  updateHero(updatedHero: Hero): Observable<any> {
    return this.http.patch("https://hero-merge.herokuapp.com/" + this.apiKey + "/heroes/" + updatedHero.id, {
      hero_name: updatedHero.hero_name,
      real_name: updatedHero.real_name,
      gender: updatedHero.gender,
      attributes: updatedHero.attributes,
      powers: updatedHero.powers,
      weaknesses: updatedHero.weaknesses
    });
  }


}
