import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LocalInteractionService } from '../../services/local-interaction.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  workoutarray: any;

  constructor(private route: ActivatedRoute, private titleService: Title, private LocalInteractionService: LocalInteractionService) {}

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data['title']);
    this.LocalInteractionService.WorkoutObservable
    .subscribe(message => {this.workoutarray = message;
      console.log(this.workoutarray);
    });
  }

}
