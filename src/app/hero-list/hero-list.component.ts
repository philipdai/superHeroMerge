import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';
import {HeroService} from "../services/hero.service";

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroList: Hero[] = [];
  // amountRows: number = 0;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.loadAll();
    this.getHeroList();

  }

  getHeroList() {
    this.heroService.heroList
      .subscribe(
        (data) => {
          this.heroList = data;
          // this.amountRows = Math.ceil(this.heroList.length / 5);
          // console.log('amountRows: ', this.amountRows);
        },
        (error) => {
          console.log('Server Error')
        }
      );
  }

}
