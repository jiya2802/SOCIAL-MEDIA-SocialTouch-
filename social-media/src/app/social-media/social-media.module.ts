import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { SharedModule } from '../shared/shared.module';
import { FollowersFollowingComponent } from './followers-following/followers-following.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreatePostComponent,
    FeedPageComponent,
    FollowersFollowingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FeedPageComponent,
    CreatePostComponent,
    FollowersFollowingComponent
  ]
})
export class SocialMediaModule { }
