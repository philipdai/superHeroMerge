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

  constructor() { }

  ngOnInit() {
  }

  showDetails() {}

  loadDetails() {}

  selectToMerge() {}
}
