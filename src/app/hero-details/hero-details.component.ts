import { Component, OnInit, Input } from '@angular/core';
import {Hero} from "../models/hero.model";

@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero: Hero;
  @Input() i: number;
  isShowHero: boolean = false;
  isUpdateHero: boolean = false;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  showDetails(hero: Hero) {
    console.log('hero: ', hero);
    this.selectedHero = hero;
    console.log('selectedHero: ', this.selectedHero);
    this.isShowHero = true;
  }

  loadDetails(hero: Hero) {
    this.isUpdateHero = true;
  }

  selectToMerge() {}

  cancelInitialDetailModal() {

    this.isShowHero = false;
    this.isUpdateHero = false;
  }

  onSubmit() {}
}
