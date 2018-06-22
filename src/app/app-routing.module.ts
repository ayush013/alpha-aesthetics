import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { CalorieCalcComponent } from './dashboard/calorie-calc/calorie-calc.component';
import { MealPlanComponent } from './dashboard/meal-plan/meal-plan.component';
import { MyfitnesspalComponent } from './dashboard/myfitnesspal/myfitnesspal.component';
import { TrainingComponent } from './dashboard/training/training.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { YoutubeComponent } from './dashboard/youtube/youtube.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DhomeComponent } from './dashboard/dhome/dhome.component';
import { WorkoutComponent } from './dashboard/workout/workout.component';
import { BlogComponent } from './dashboard/blog/blog.component';
import { BlogArticleComponent } from './dashboard/blog/blog-article/blog-article.component';
import { WorkoutTableComponent } from './dashboard/workout/workout-table/workout-table.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Alpha Aesthetics'} },
  { path: 'dashboard', component: DashboardComponent,  
  children: [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    { path: 'home', component: DhomeComponent, data: { title: 'Dashboard - Home'} },
    { path: 'profile', component: ProfileComponent, data: { title: 'Dashboard - Profile'} },
    { path: 'calculator', component: CalorieCalcComponent, data: { title: 'Calorie Calculator'} },
    { path: 'mealplan', component: MealPlanComponent, data: { title: 'Meal Plan Generator'} },
    { path: 'workout', component: WorkoutComponent, data: { title: 'Free Workout Plans'} },
    { path: 'workout/:path', component: WorkoutComponent, data: { title: 'Free Workout Plans'} },
    { path: 'blog', component: BlogComponent, data: { title: 'Blog'} },
    { path: 'blog/:path', component: BlogArticleComponent, data: { title: 'Blog'} },
    { path: 'myfitnesspal', component: MyfitnesspalComponent, data: { title: 'Myfitnesspal Insights'} },
    { path: 'training', component: TrainingComponent, data: { title: 'Personal Training'} },
    { path: 'youtube', component: YoutubeComponent, data: { title: 'Youtube Channel'} }
  ]
 },
  { path: 'not-found', component: ErrorPageComponent, data: { title: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
