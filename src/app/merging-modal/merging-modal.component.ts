import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {Hero} from "../models/hero.model";
declare let _:any;

@Component({
  selector: 'merging-modal',
  templateUrl: './merging-modal.component.html',
  styleUrls: ['./merging-modal.component.css'],
  outputs: ['onGenerateMergedHero']
})
export class MergingModalComponent implements OnInit {
  @Input() mergingList: Hero[];
  @Input() isShowMergingModal: boolean = false;
  onGenerateMergedHero: EventEmitter<Hero>;

  newHero: Hero;

  constructor() {
    this.newHero = new Hero();
    this.onGenerateMergedHero = new EventEmitter();
  }

  generateMergedHero() {
    if (this.mergingList.length === 2) {
      this.newHero.weaknesses = _.uniq(this.mergingList[0].weaknesses.concat(this.mergingList[1].weaknesses));
    }

    this.newHero.powers = _.uniq(this.newHero.powers);
    this.isShowMergingModal = false;
    this.onGenerateMergedHero.emit(this.newHero);
  }

  check(e) {
    if (e.target.checked) {
      this.newHero.powers.push(e.target.value);
    } else {
      this.newHero.powers = this.newHero.powers.filter((power) => power !== e.target.value);
    }
  }

  disablePowerCheckbox(power) {
    let uniquePowers = _.uniq(this.newHero.powers);
    return (uniquePowers.length >= 5) && (this.newHero.powers.indexOf(power) === -1);
  }

  ngOnInit() {
  }

}
