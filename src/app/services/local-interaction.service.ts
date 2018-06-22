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
    { route: 'pancake', article: 'Easy Protein Pancake Recipe in just 5 minutes.. Easy Protein Pancake Recipe in just 5 minutes..', title: 'Protein Pancake Recipe', text: 'Easy Protein Pancake Recipe in just 5 minutes..', icon: 'fa-cutlery', category: 'Recipe', image: 'https://images-gmi-pmc.edge-generalmills.com/edfaaf9f-9bde-426a-8d67-3284e9e496ae.jpg'},
];

  private blogArray = new BehaviorSubject(this.blogarray);
  ArrayObservable = this.blogArray.asObservable();

}
