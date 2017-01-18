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
  isEditHero: boolean = false;
  selectedHero: any;

  constructor() {


  }

  ngOnInit() {
  }

  showDetails(hero: Hero) {
    this.selectedHero = hero;
    this.isShowHero = true;
  }

  editDetails(hero: Hero) {
    this.selectedHero = hero;
    this.isEditHero = true;
  }

  selectToMerge() {}

  cancelInitialDetailModal() {
    this.isShowHero = false;
    this.isEditHero = false;
  }

  onSubmit() {}
}
