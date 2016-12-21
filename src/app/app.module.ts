import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WorkoutService } from './workouts/workout.service';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StickyModule } from 'ng2-sticky-kit/ng2-sticky-kit';

import { AppComponent } from './app.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutComponent } from './workout/workout.component';
import { StickyDirective } from './sticky.directive';
import { WindowService } from './window.service';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    WorkoutComponent,
    StickyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StickyModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path:'',
        component: WorkoutsComponent
      },
      {
        path: 'workouts',
        component: WorkoutsComponent
      },
      {
        path: 'workout/:id',
        component: WorkoutComponent
      }
    ])
  ],
  providers: [WorkoutService, WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
