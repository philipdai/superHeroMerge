import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {Hero} from "../models/hero.model";

@Component({
  selector: 'detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.css'],
  outputs: ['onCancel']
})
export class DetailModalComponent implements OnInit {
  @Input() detailedHero: Hero;
  onCreateHero: EventEmitter<Hero>;
  onCancel: EventEmitter<any>;
  submitted: boolean = false;

  constructor() {
    this.onCreateHero = new EventEmitter();
    this.onCancel = new EventEmitter();
  }

  ngOnInit() {

  }

  cancel() {
    this.submitted = false;
    this.onCancel.emit({cancel: true});
  }

  createHero(hero: Hero) {

  }

  onSubmit() {
    this.submitted = true;
  }


}
