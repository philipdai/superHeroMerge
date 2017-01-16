import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroList: Hero[] = [];

  constructor() { }

  ngOnInit() {
  }

}
