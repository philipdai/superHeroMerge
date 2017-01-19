import { Attributes } from './attributes.model';
import { Gender } from './gender.enum';

export class Hero {
  constructor(public id: number = -1,
              public hero_name: string = "",
              public real_name: string = "",
              public gender: string = Gender[Gender.Male],
              public attributes: Attributes = new Attributes(),
              public powers: string[] = [],
              public weaknesses: string[] = [],
              public selected: boolean = false) {}
}