import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workouts/workout.service';
import { Workout } from '../workout/workout';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.less']
})
export class WorkoutComponent implements OnInit {
  workout: Workout;
  error: boolean = false;
  loading: boolean = true;

  constructor(private workoutService: WorkoutService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.workoutService.getWorkout(+params['id']))
      .subscribe(
        (workout: Workout) => {
          this.workout = workout;
          this.loading = false;
        },
        (error) => {
          this.error = true;
          this.loading = false; //TODO refactor this to a finally
        }
      );
  }
}
