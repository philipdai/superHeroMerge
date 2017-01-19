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
  selectedToMergeHeroes: Hero[] = [];
  isShowMergingModal: boolean = false;

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.heroService.loadAll();
    this.getInitialHeroList();

  }

  getInitialHeroList() {
    this.heroService.heroList
      .subscribe(
        (data) => {
          this.heroList = data;
          this.heroList.forEach((hero) => hero.selected = false);
        },
        (error) => {
          console.log('Server Error')
        }
      );
  }

  getHeroList() {
    this.heroService.getHerosAPI()
      .subscribe(
        (data) => {
          this.heroList = data;
          this.heroList.forEach((hero) => hero.selected = false);
        },
        (error) => {
          console.log('Server Error')
        }
      );
  }

  updateHeroList(event) {
    let len = this.selectedToMergeHeroes.length;

    if (len > 1 && event.selected) {

    } else {
      if (!event.selected) {
        this.selectedToMergeHeroes = this.selectedToMergeHeroes.filter(hero => hero.id !== event.id);
      } else {
        this.selectedToMergeHeroes.push(event);
      }
    }

    if (this.selectedToMergeHeroes.length === 2) {
      this.isShowMergingModal = true;
    }
  }

  createHero(event: Hero) {
    let newHero: Hero = event;
    delete newHero.selected;
    this.heroService.createHero(newHero).subscribe(data => {
      this.getHeroList();
    });
    this.selectedToMergeHeroes = [];
  }

}
