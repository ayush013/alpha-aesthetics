import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalInteractionService {

  constructor() { }

  insightdatamodel: Array<Object> = [{
    class: String,
    property: String,
    value: String,
    text: String
  }]

blogarray = [
    { route: 'cheatday', article: 'I love cheat days, I love cheat days, I love cheat days', title: 'Cheat Day Inspirations', text: 'I love cheat days, They can be helpful sometimes :)', icon: 'fa-cutlery', category: 'Miscellaneous', image: 'http://homecookingadventure.com/images/recipes/brownies.jpg'},
    { route: 'periodization', article: 'DUP, Block Periodization  DUP, Block Periodization  DUP, Block Periodization ', title: 'Periodization', text: 'DUP, Block Periodization and much more..', icon: 'fa-clock-o', category: 'Training', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEXX-wuzkGL4mT5uSiD-soQEecvJLln4Gb__tVfKX3XoxuNUM0A'},
    { route: 'pancake', article: 'Easy Protein Pancake Recipe in just 5 minutes.. Easy Protein Pancake Recipe in just 5 minutes..', title: 'Protein Pancake Recipe', text: 'Easy Protein Pancake Recipe in just 5 minutes..', icon: 'fa-cutlery', category: 'Recipe', image: 'https://images-gmi-pmc.edge-generalmills.com/edfaaf9f-9bde-426a-8d67-3284e9e496ae.jpg'}
];

workoutarray = [
  { route: 'fullbody', workout: [[{exercise:'Squat', sets:'3', reps: '8-12'}, {exercise:'Row', sets:'3', reps: '8-12'}, {exercise:'Deadlift', sets:'3', reps: '8-12'}, {exercise:'Plank', sets:'3', reps: '8-12'}],[{exercise:'OHP', sets:'3', reps: '8-12'}, {exercise:'Row', sets:'3', reps: '8-12'}, {exercise:'Deadlift', sets:'3', reps: '8-12'}, {exercise:'Plank', sets:'3', reps: '8-12'}]], title: 'Full Body Workout', features: ['easy','3 times week','beginner'], image: 'https://surgeryxchange.com/blog/wp-content/uploads/2017/08/9ab6f4588d7051a0698e9b1b89386e49.jpg'},
  { route: 'fullbody', workout: [[{exercise:'Squat', sets:'3', reps: '8-12'}, {exercise:'Row', sets:'3', reps: '8-12'}, {exercise:'Deadlift', sets:'3', reps: '8-12'}, {exercise:'Plank', sets:'3', reps: '8-12'}],[{exercise:'Rest Day'} ],[{exercise:'Squat', sets:'3', reps: '8-12'}, {exercise:'Row', sets:'3', reps: '8-12'}, {exercise:'Deadlift', sets:'3', reps: '8-12'}, {exercise:'Plank', sets:'3', reps: '8-12'}],[{exercise:'OHP', sets:'3', reps: '8-12'}, {exercise:'Row', sets:'3', reps: '8-12'}, {exercise:'Deadlift', sets:'3', reps: '8-12'}, {exercise:'Plank', sets:'3', reps: '8-12'}]], title: 'Full Body Workout', features: ['easy','3 times week','beginner'], image: 'https://surgeryxchange.com/blog/wp-content/uploads/2017/08/9ab6f4588d7051a0698e9b1b89386e49.jpg'},
  { route: 'fullbody', workout: [[{exercise:'Squat', sets:'3', reps: '8-12'}, {exercise:'Row', sets:'3', reps: '8-12'}, {exercise:'Deadlift', sets:'3', reps: '8-12'}, {exercise:'Plank', sets:'3', reps: '8-12'}],[{exercise:'OHP', sets:'3', reps: '8-12'}, {exercise:'Row', sets:'3', reps: '8-12'}, {exercise:'Deadlift', sets:'3', reps: '8-12'}, {exercise:'Plank', sets:'3', reps: '8-12'}]], title: 'Full Body Workout', features: ['easy','3 times week','beginner'], image: 'https://surgeryxchange.com/blog/wp-content/uploads/2017/08/9ab6f4588d7051a0698e9b1b89386e49.jpg'}
];

  private blogArray = new BehaviorSubject(this.blogarray);
  BlogObservable = this.blogArray.asObservable();

  private workoutArray = new BehaviorSubject(this.workoutarray);
  WorkoutObservable = this.workoutArray.asObservable();

  profiledata = {
    weight: 65, 
    weightunit: 'kg',
    goal: 3,
    height: 170,
    heightunit: 'cm',
  };

  googledata = {
    fname: 'Ayush',
    lname: 'Singh',
    imgsrc: '../../assets/images/dp.jpg',
    email: 'ayush.singh.xda@gmail.com'
  };

  private profileObject = new BehaviorSubject(this.profiledata);
  ProfileObservable = this.profileObject.asObservable();

  private googleObject = new BehaviorSubject(this.googledata);
  GoogleObservable = this.googleObject.asObservable();
  

}
