import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LocalInteractionService } from '../../services/local-interaction.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute, private titleService: Title, private LocalInteractionService: LocalInteractionService) {}

  googledata;

  experience = [{name:'Beginner', desc:'Little to no experience in gym. Just started your fitness journey. 😊'},
  {name:'Intermediate', desc:'Been working out consistently for 1-3 years. Intermediate knowledge about health and fitness 💪'},
  {name:'Advanced', desc:'Been working out consistently for 3+ years. You know your shit! 🏋'}
  ];
  lifestyle = [{name:'Sedentary', desc:'Spend most of the day sitting (E.g. Desk Job, Developer 🤓)'},
  {name:'Lightly Active', desc:'Spend good part of the day on your feet (E.g. College Student )/ Exercise 2-3 times a week'},
  {name:'Active', desc:'Spend good part of the day doing physical activity / Exercise 5-6 times a week'},
  {name:'Highly Active', desc:'Spend most of the day doing heavy physical activity / Intense exercise daily'},
  ];
  weightunit = ['Kgs', 'Lbs'];
  heightunit = ['cms', 'ft'];
  goals = ['Lose 1 kg per week','Lose 0.5 kg per week','Lose 0.25 kg per week','Maintain Current Weight','Gain 0.25 kg per week','Gain 0.5 kg per week'];

  ProfileFormData: FormGroup;

  SaveProfile() {
    console.log(this.ProfileFormData.value);
    this.LocalInteractionService.SetProfile(this.ProfileFormData.value);
  }

  ConvertWeight(unit) {
    console.log(this.ProfileFormData.value.weightunit);
    if(this.ProfileFormData.get('weightunit').value === unit) {
      console.log('nothing is changed');
    }
    else if (unit==2 && this.ProfileFormData.value.weightunit == 1) {
      this.ProfileFormData.patchValue({weight: Math.round(220.46226218*this.ProfileFormData.get('weight').value)/100 });
      this.ProfileFormData.patchValue({weightunit: 2});
      console.log(this.ProfileFormData.get('weight').value)
      console.log(this.ProfileFormData.get('weightunit').value)
    }
    else {
      this.ProfileFormData.patchValue({weight: Math.round(this.ProfileFormData.get('weight').value*100/2.2046226218)/100 });
      this.ProfileFormData.patchValue({weightunit: 1});
      console.log(this.ProfileFormData.get('weight').value)
      console.log(this.ProfileFormData.get('weightunit').value)
    }
  }

  ConvertHeight(unit) {
    console.log(this.ProfileFormData.value.weightunit);
    if(this.ProfileFormData.get('heightunit').value === unit) {
      console.log('nothing is changed');
    }
    else if (unit==2 && this.ProfileFormData.value.weightunit == 1) {
      this.ProfileFormData.removeControl('heightcm');
      this.ProfileFormData.addControl('heightinch', new FormControl(null, Validators.required));
      this.ProfileFormData.addControl('heightfeet', new FormControl(null, Validators.required));
      this.ProfileFormData.patchValue({heightunit: 2});
    }
    else {
      // this.ProfileFormData.patchValue({weight: Math.round(this.ProfileFormData.get('weight').value*100/2.2046226218)/100 });
      this.ProfileFormData.removeControl('heightfeet');
      this.ProfileFormData.removeControl('heightinch');
      this.ProfileFormData.addControl('heightcm', new FormControl(null, Validators.required));
      this.ProfileFormData.patchValue({heightunit: 1});
    }
  }

  GoalValue(goal) {
    this.ProfileFormData.patchValue({goal: goal});
  }

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data['title'])


    this.LocalInteractionService.GoogleObservable
    .subscribe(message => {this.googledata = message;
    });

    this.ProfileFormData = new FormGroup({
      'weight': new FormControl(null, [Validators.required, Validators.min(20)]),
      'weightunit': new FormControl(1),
      'age': new FormControl(null, [Validators.required, Validators.max(100), Validators.min(15)]),
      'email': new FormControl({value: this.googledata.email, disabled: true}, [Validators.required, Validators.email]),
      'gender': new FormControl({value: this.googledata.gender, disabled: true}),
      'goal': new FormControl(null, Validators.required),
      'experience': new FormControl(null, Validators.required),
      'lifestyle': new FormControl(null, Validators.required),
      'heightunit': new FormControl(1),
      'heightcm': new FormControl(null, Validators.required),
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
    });


  }


}
