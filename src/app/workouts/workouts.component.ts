import { Component, OnInit } from '@angular/core';
import {WorkoutService} from "./workout.service";
import {WorkoutSummary} from "./workoutSummary";

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.less']
})
export class WorkoutsComponent implements OnInit {
  workouts: WorkoutSummary[];

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.workoutService.getWorkoutSummaries()
      .subscribe(data => this.workouts = data);
  }

  //http://www.route2it.com/uncategorized/creating-an-animated-header-with-angular-2/
  //TODO make a directive that listens for host even and set a
  //class to make it fixed?

}
