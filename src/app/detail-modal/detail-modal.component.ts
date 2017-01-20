import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {Hero} from "../models/hero.model";
declare let _;
@Component({
  selector: 'detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.css'],
  outputs: ['onCancel']
})
export class DetailModalComponent implements OnInit {
  @Input() detailedHero: Hero;
  @Input() isShowing: boolean = false;
  @Input() isEditing: boolean = false;
  @Input() isMerging: boolean = false;

  onCreateHero: EventEmitter<Hero>;
  onCancel: EventEmitter<boolean>;
  submitted: boolean = false;

  constructor() {
    this.onCreateHero = new EventEmitter();
    this.onCancel = new EventEmitter();
    this.isShowing = false;
    this.isEditing = false;
    this.isMerging = false;

  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  ngOnInit() {
  }

  cancel() {
    this.isShowing = false;
    this.isEditing = false;
    this.submitted = false;
    this.onCancel.emit(false);
  }

  createHero(hero: Hero) {

  }

  onSubmit() {
    this.submitted = true;
  }


}
