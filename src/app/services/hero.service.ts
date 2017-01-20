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
  private apiKey: string;

  constructor(private http: Http) {
    this.baseUrl = "https://hero-merge.herokuapp.com/";
    this.baseApiUrl = "https://hero-merge.herokuapp.com/getApiKey";
    this.dataStore = { heroList: []};
    this._heroList = <BehaviorSubject<Hero[]>> new BehaviorSubject([]);
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
      this.http.get(`${this.baseUrl}${data.apiKey}/heroes`)
        .map((res: Response) => {
          return res.json();
        }).subscribe(
        (res) => {
          this.dataStore.heroList = res;
          this._heroList.next(Object.assign({}, this.dataStore).heroList);
        },
        (error) => {
          console.log('Could not load heroes.')
        }
      );
    }, error => console.log('Could not load apiKey.'));
  }

  getHerosAPI(): Observable<any> {
    return this.http.get("https://hero-merge.herokuapp.com/" + this.apiKey + "/heroes")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error!'));
  }


  createHero(newHero: Hero): Observable<any> {
    delete newHero.id;
    return this.http.post("https://hero-merge.herokuapp.com/" + this.apiKey + "/heroes", newHero);
  }

  updateHero(updatedHero: Hero): Observable<any> {
    return this.http.patch("https://hero-merge.herokuapp.com/" + this.apiKey + "/heroes/" + updatedHero.id, updatedHero);
  }


}
