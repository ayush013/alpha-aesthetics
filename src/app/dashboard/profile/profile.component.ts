import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LocalInteractionService } from '../../services/local-interaction.service';
import { FormGroup, FormControl } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute, private titleService: Title, private LocalInteractionService: LocalInteractionService) {}

  profiledata;
  googledata;
  exp;

  experience = ['Beginner', 'Intermediate', 'Advanced'];
  weightunit = ['Kgs', 'Lbs'];
  goals = ['Lose 1 kg per week','Lose 0.5 kg per week','Lose 0.25 kg per week','Maintain Current Weight','Gain 0.25 kg per week','Gain 0.5 kg per week'];

  ProfileFormData: FormGroup;

  ConvertWeight(unit) {
    console.log(this.ProfileFormData.value.weightunit);
    if(this.ProfileFormData.value.weightunit == unit) {
      console.log('nothing is changed');
    }
    else if (unit==2 && this.ProfileFormData.value.weightunit == 1) {
      this.ProfileFormData.value.weight *= 2.2046226218; 
    console.log(this.ProfileFormData.value.weight)
    }
  }

  GoalValue(goal) {
    this.ProfileFormData.value.goal = goal;
  }

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data['title'])
    this.LocalInteractionService.ProfileObservable
    .subscribe(message => {this.profiledata = message;
    });

    this.LocalInteractionService.GoogleObservable
    .subscribe(message => {this.googledata = message;
    });

    this.ProfileFormData = new FormGroup({
      'weight': new FormControl(null),
      'weightunit': new FormControl(1),
      'email': new FormControl({value: this.googledata.email, disabled: true}),
      'goal': new FormControl(null),
      'experience': new FormControl(null),
      'height': new FormControl(null),
    });

    console.log(this.ProfileFormData);

  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    var selected = $('.selected');
    var dropdown = $('.dropdown-list');
    var optionList = $('.dropdown-list li');

    selected.click(function() {
        dropdown.toggleClass('selectactive');
        
        if(dropdown.hasClass('selectactive')) {
            optionList.click(function() {
                
                if(optionList.hasClass('selectactive')) {
                    $(this).siblings().removeClass('selectactive');
                } else {
                    $(this).addClass('selectactive');
                }
                dropdown.removeClass('selectactive');
                selected.children('span').html($(this).html());
            })
        }
    })

  }


}
