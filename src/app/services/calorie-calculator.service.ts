import { Injectable } from '@angular/core';
import { LocalInteractionService, ProfileData } from './local-interaction.service';

@Injectable({
  providedIn: 'root'
})

export class CalorieCalculatorService {

  constructor(private LocalInteractionService: LocalInteractionService) { }

  profiledata: ProfileData;
  googledata;
  caloriedata: { 'bmr': number };

FatLoss() {
  this.profiledata = this.LocalInteractionService.GetProfileData();
  this.googledata = this.LocalInteractionService.GetGoogleData();

  if(this.googledata.gender === 'male' ) {
    this.caloriedata.bmr = 10*this.profiledata.weight + 6.25*this.profiledata.heightcm - 5*21 + 5;
    console.log(this.caloriedata)

  }

}

}
