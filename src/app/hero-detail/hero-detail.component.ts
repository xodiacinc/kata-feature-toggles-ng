import { Component, OnInit, Input } from '@angular/core';

import { Hero } from "../hero";
import { FeatureService } from "../feature.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {

  @Input() hero: Hero;

  constructor(private features: FeatureService) {
  }

}
