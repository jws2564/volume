import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { WorkoutSummary } from './workoutSummary';
import { Workout } from '../workout/workout';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkoutService {

  constructor(private http: Http) { }

  getWorkoutSummaries() {
    return this.http.get('app/workouts/mocks/workouts-mock.json')
      .map(response => <WorkoutSummary[]>response.json().workoutData);
  }

  getWorkout(id) {
    id = id || 1;
    return this.http.get('app/workouts/mocks/workout-'+ id + '-mock.json')
      .map(response => <Workout>response.json().workoutData);
  }

}
