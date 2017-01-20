import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {Hero} from "../models/hero.model";

@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
  outputs: ['onToggledHero', 'onCancel']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero: Hero;
  @Input() i: number;
  @Input() mergingList: Hero[] = [];
  isShowHero: boolean = false;
  isEditHero: boolean = false;
  selectedHero: Hero = null;
  onToggledHero: EventEmitter<Hero>;
  onCancel: EventEmitter<boolean>;

  constructor() {
    this.onToggledHero = new EventEmitter();
    this.onCancel = new EventEmitter();
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

  toggleSelectToMerge(hero: Hero) {
    this.selectedHero = hero;

    if (this.selectedHero.selected === true ) {
      this.selectedHero.selected = false;
    } else {
      this.selectedHero.selected =true;
    }

    this.onToggledHero.emit(this.selectedHero);
  }

  cancelInitialDetailModal() {
    this.isShowHero = false;
    this.isEditHero = false;
    this.onCancel.emit(false);
  }

  onSubmit() {}
}
