import { Injectable } from '@angular/core';
import { LocalInteractionService, ProfileData, CalorieData } from './local-interaction.service';

@Injectable({
  providedIn: 'root'
})

export class CalorieCalculatorService {

  constructor(private LocalInteractionService: LocalInteractionService) { }

  profiledata: ProfileData;
  googledata;
  caloriedata: CalorieData = {};

  goals = ['Lose 1 kg per week','Lose 0.5 kg per week','Lose 0.25 kg per week','Maintain Current Weight','Gain 0.25 kg per week','Gain 0.5 kg per week'];

  experience = [{name:'Beginner', desc:'Little to no experience in gym. Just started your fitness journey. 😊'},
  {name:'Intermediate', desc:'Been working out consistently for 1-3 years. Intermediate knowledge about health and fitness 💪'},
  {name:'Advanced', desc:'Been working out consistently for 3+ years. You know your shit! 🏋'}
  ];

  lifestyle = [{name:'Sedentary', desc:'Spend most of the day sitting (E.g. Desk Job, Developer 🤓)'},
  {name:'Lightly Active', desc:'Spend good part of the day on your feet (E.g. College Student )/ Exercise 2-3 times a week'},
  {name:'Active', desc:'Spend good part of the day doing physical activity / Exercise 5-6 times a week'},
  {name:'Highly Active', desc:'Spend most of the day doing heavy physical activity / Intense exercise daily'},
  ];

  BMR(gender, weight, height, age) {
    if(gender === 'male' ) {

      this.caloriedata['bmr'] = ((10*weight)+(6.25*height)-(5*age)+5);
      console.log(this.caloriedata)
  
    }

    else if(gender === 'female' ) {
      this.caloriedata['bmr'] = ((10*weight)+(6.25*height)-(5*age)-161);
      console.log(this.caloriedata)
  
    }

    else { console.log(`SOMETHING'S NOT RIGHT`) }

}

ConvertHeight(heightfeet, heightinch) {
  this.profiledata['heightcm'] = ((heightfeet*30.48) + (heightinch*2.54));
}

ConvertWeight(weight) {
  this.profiledata['weight'] = (Math.round(weight*100/2.2046226218)/100);
}

MaintenanceCal(bmr, lifestyle) {
  switch(lifestyle) {
    case 1: {this.caloriedata['maintenance'] = bmr*1.2; break;}
    case 2: {this.caloriedata['maintenance'] = bmr*1.35; break;}
    case 3: {this.caloriedata['maintenance'] = bmr*1.45; break;}
    case 4: {this.caloriedata['maintenance'] = bmr*1.75; break;}
    default: {console.log('FATAL MAINTENANCE ERROR'); break;}
  }
}

MacroGenerator(calories, weight, experience) {

  if(experience == 1) {
    this.caloriedata['macroarray'] = [
      { 
        name: 'Low Carb, High Fat',
        pmacro: (Math.round(0.7*weight*220.46226218100)/100),
        get pcals() { return (4*this.pmacro) },
        fcals: (calories*0.3),
        get fmacro() { return (Math.round((this.fcals*100)/900)) },
        get ccals() { return (calories-this.pcals-this.fcals) },
        get cmacro() { return (Math.round(this.ccals*100)/400) },
      },
      { 
        name: 'Moderate Carb, Moderate Fat',
        pmacro: (Math.round(0.7*weight*220.46226218100)/100),
        get pcals() { return (4*this.pmacro) },
        fcals: (calories*0.25),
        get fmacro() { return (Math.round((this.fcals*100)/900)) },
        get ccals() { return (calories-this.pcals-this.fcals) },
        get cmacro() { return (Math.round(this.ccals*100)/400) },
      },
      { 
        name: 'High Carb, Low Fat',
        pmacro: (Math.round(0.7*weight*220.46226218100)/100),
        get pcals() { return (4*this.pmacro) },
        fcals: (calories*0.2),
        get fmacro() { return (Math.round((this.fcals*100)/900)) },
        get ccals() { return (calories-this.pcals-this.fcals) },
        get cmacro() { return (Math.round(this.ccals*100)/400) },
      }
    ]
}
  else {
    this.caloriedata['macroarray'] = [
      { 
        name: 'Low Carb, High Fat',
        pmacro: (Math.round(weight*220.46226218100)/100),
        get pcals() { return (4*this.pmacro) },
        fcals: (calories*0.3),
        get fmacro() { return (Math.round((this.fcals*100)/900)) },
        get ccals() { return (calories-this.pcals-this.fcals) },
        get cmacro() { return (Math.round(this.ccals*100)/400) },
      },
      { 
        name: 'Moderate Carb, Moderate Fat',
        pmacro: (Math.round(weight*220.46226218100)/100),
        get pcals() { return (4*this.pmacro) },
        fcals: (calories*0.25),
        get fmacro() { return (Math.round((this.fcals*100)/900)) },
        get ccals() { return (calories-this.pcals-this.fcals) },
        get cmacro() { return (Math.round(this.ccals*100)/400) },
      },
      { 
        name: 'High Carb, Low Fat',
        pmacro: (Math.round(weight*220.46226218100)/100),
        get pcals() { return (4*this.pmacro) },
        fcals: (calories*0.2),
        get fmacro() { return (Math.round((this.fcals*100)/900)) },
        get ccals() { return (calories-this.pcals-this.fcals) },
        get cmacro() { return (Math.round(this.ccals*100)/400) },
      }
    ]
}

}

Cardio(activity, goal) {
  switch(goal) {
    case 1: {
      if(activity == 1 || 2) {
        this.caloriedata['cardio'] = 4;
      }
      else this.caloriedata['cardio'] = 3;

      break;
    }
    case 2: {
      if(activity == 1 || 2) {
        this.caloriedata['cardio'] = 3;
      }
      else this.caloriedata['cardio'] = 2;

      break;
    }
    case 3: {
      if(activity == 1 || 2) {
        this.caloriedata['cardio'] = 2;
      }
      else this.caloriedata['cardio'] = 1;

      break;
    }
    case 4: case 5: case 6: {
      this.caloriedata['cardio'] = 1;
      break;
     }
    default: {console.log('FATAL CARDIO ERROR'); break;}

  }
}

CommonRoutine() {
    // ADD USER NAME TO CALORIEDATA OBJECT
    this.caloriedata['name'] = this.googledata.fname;
    this.caloriedata['experience'] = this.experience[this.profiledata.experience-1].name;
    this.caloriedata['lifestyle'] = this.lifestyle[this.profiledata.lifestyle-1].name;
    this.caloriedata['goal'] = this.goals[this.profiledata.goal-1];

    // CONVERT HEIGHT INCHES TO CMS
      if(this.profiledata.heightunit === 2 ) {
        this.ConvertHeight(this.profiledata.heightfeet, this.profiledata.heightinch);
      }
  
    // CONVERT WEIGHT LBS TO KGS
    if(this.profiledata.weightunit === 2 ) {
      this.ConvertWeight(this.profiledata.weight);
    }
  
  
    // CALCULATE BMR 
    this.BMR(this.googledata.gender, this.profiledata.weight, this.profiledata.heightcm, this.profiledata.age);
  
  
    // CALCULATE MAINTENANCE CALS
      this.MaintenanceCal(this.caloriedata['bmr'], this.profiledata['lifestyle']);  
}


FatLoss() {

  // CLEAR OBJECT FIRST
  this.caloriedata = {};

  // FETCH DATA FIRST
  this.profiledata = this.LocalInteractionService.GetProfileData();
  this.googledata = this.LocalInteractionService.GetGoogleData();

  // EXECUTE COMMON MODULE 
  this.CommonRoutine();

  // LOWER LIMIT OF CALS
  this.caloriedata['rockbottom'] =  (Math.round(8*this.profiledata.weight*220.46226218100)/100);


  // FATLOSS CALS
  switch(this.profiledata.goal) {
    case 1: { 
      this.caloriedata['fatlosscal'] = Math.max((this.caloriedata['maintenance']-1000), this.caloriedata['rockbottom']);
      break;
    }
    case 2: { 
      this.caloriedata['fatlosscal'] = Math.max((this.caloriedata['maintenance']-500), this.caloriedata['rockbottom']);
      break;
    }
    case 3: { 
      this.caloriedata['fatlosscal'] = Math.max((this.caloriedata['maintenance']-250), this.caloriedata['rockbottom']);
      break;
    }
    case 4: case 5: case 6: { 
      this.caloriedata['goalerrormsg'] = `${this.goals[this.profiledata.goal-1]}`;
        return this.caloriedata;; } 
    default: {console.log('FATAL FATLOSS CALS ERROR'); break;}
  }

  // CALCULATE MACROS FOR FATLOSS BASED ON EXPERIENCE
  this.MacroGenerator(this.caloriedata['fatlosscal'], this.profiledata.weight, this.profiledata.experience);
  console.log(this.caloriedata);

  // CALCULATE CARDIO FOR FATLOSS
  this.Cardio(this.profiledata.lifestyle, this.profiledata.goal);

  // RETURN DATA
  return this.caloriedata;

}

Maintenance() {

  // CLEAR OBJECT FIRST
  this.caloriedata = {};

  // FETCH DATA FIRST
  this.profiledata = this.LocalInteractionService.GetProfileData();
  this.googledata = this.LocalInteractionService.GetGoogleData();

  // EXECUTE COMMON MODULE 
  this.CommonRoutine();

  // RETURN IF GOAL != 4
  if(this.profiledata.goal != 4)  {
    this.caloriedata['goalerrormsg'] = `${this.goals[this.profiledata.goal-1]}`;
      return this.caloriedata;
  }

  // CALCULATE MACROS FOR MAINTENANCE BASED ON EXPERIENCE
  this.MacroGenerator(this.caloriedata['maintenance'], this.profiledata.weight, this.profiledata.experience);
  console.log(this.caloriedata);

  // CALCULATE CARDIO FOR MAINTENANCE
  this.Cardio(this.profiledata.lifestyle, this.profiledata.goal);

  // RETURN DATA
  return this.caloriedata;

}

Bulking() {

  // CLEAR OBJECT FIRST
  this.caloriedata = {};

  // FETCH DATA FIRST
  this.profiledata = this.LocalInteractionService.GetProfileData();
  this.googledata = this.LocalInteractionService.GetGoogleData();

  // EXECUTE COMMON MODULE 
  this.CommonRoutine();

  // BULKING CALS
  switch(this.profiledata.goal) {
    case 5: { 
      this.caloriedata['bulkingcal'] = this.caloriedata['maintenance']+250;
      break;
    }
    case 6: { 
      this.caloriedata['bulkingcal'] = this.caloriedata['maintenance']+500;
      break;
    }
    case 1: case 2: case 3: case 4: { 
      this.caloriedata['goalerrormsg'] = `${this.goals[this.profiledata.goal-1]}`;
      return this.caloriedata;
    }
    default: {console.log('FATAL BULKING CALS ERROR'); break;}
  }

  // CALCULATE MACROS FOR BULKING BASED ON EXPERIENCE
  this.MacroGenerator(this.caloriedata['bulkingcal'], this.profiledata.weight, this.profiledata.experience);
  console.log(this.caloriedata);

  // CALCULATE CARDIO FOR BULKING
  this.Cardio(this.profiledata.lifestyle, this.profiledata.goal);

  // RETURN DATA
  return this.caloriedata;

}

}
