import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { HomeComponent } from './user/home/home.component';
import { FeedPageComponent } from './social-media/feed-page/feed-page.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { FollowersFollowingComponent } from './social-media/followers-following/followers-following.component';

const routes: Routes = [
  {
    path:'register',
    component: RegisterUserComponent
  },
  {
    path:'',
    component:LoginUserComponent
  },
  {
    path:'feed',
    component:FeedPageComponent
  },
  {
    path:"forgot-password",
    component:ForgotPasswordComponent
  },
  {
    path:"followers-following",
    component:FollowersFollowingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
