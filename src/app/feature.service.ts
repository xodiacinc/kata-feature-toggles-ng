import { Injectable } from '@angular/core';
import { FeatureFlags } from "./feature.flags";

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  isOn(feature: string) {
    return FeatureFlags[feature] || false
  }
}
