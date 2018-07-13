import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { NgsRevealModule } from 'ng-scrollreveal';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { CalorieCalcComponent } from './dashboard/calorie-calc/calorie-calc.component';
import { MealPlanComponent } from './dashboard/meal-plan/meal-plan.component';
import { MyfitnesspalComponent } from './dashboard/myfitnesspal/myfitnesspal.component';
import { TrainingComponent } from './dashboard/training/training.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { YoutubeComponent } from './dashboard/youtube/youtube.component';
import { DhomeComponent } from './dashboard/dhome/dhome.component';
import { WorkoutComponent } from './dashboard/workout/workout.component';
import { BlogComponent } from './dashboard/blog/blog.component';
import { CardComponent } from './dashboard/blog/card/card.component';
import { FloatbuttonComponent } from './dashboard/floatbutton/floatbutton.component';
import { WorkoutcardComponent } from './dashboard/workout/workoutcard/workoutcard.component';
import { WorkoutTableComponent } from './dashboard/workout/workout-table/workout-table.component';
import { InsightcardComponent } from './dashboard/dhome/insightcard/insightcard.component';
import { BlogArticleComponent } from './dashboard/blog/blog-article/blog-article.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CaloriecardComponent } from './dashboard/calorie-calc/caloriecard/caloriecard.component';
import { LocalInteractionService } from './services/local-interaction.service';
import { CalorieCalculatorService } from './services/calorie-calculator.service';
import { ServerInteractionService } from './services/server-interaction.service';
import { FatlossComponent } from './dashboard/calorie-calc/fatloss/fatloss.component';
import { BulkingComponent } from './dashboard/calorie-calc/bulking/bulking.component';
import { MaintainComponent } from './dashboard/calorie-calc/maintain/maintain.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProfileComponent,
    CalorieCalcComponent,
    MealPlanComponent,
    MyfitnesspalComponent,
    TrainingComponent,
    ErrorPageComponent,
    SidebarComponent,
    DashboardComponent,
    YoutubeComponent,
    DhomeComponent,
    WorkoutComponent,
    BlogComponent,
    CardComponent,
    FloatbuttonComponent,
    WorkoutcardComponent,
    WorkoutTableComponent,
    InsightcardComponent,
    BlogArticleComponent,
    CaloriecardComponent,
    BulkingComponent,
    MaintainComponent,
    FatlossComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    NgsRevealModule.forRoot()
  ],
  providers: [AuthService, AuthGuard, LocalInteractionService, CalorieCalculatorService, ServerInteractionService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
