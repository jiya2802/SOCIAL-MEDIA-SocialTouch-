import { Component } from '@angular/core';
import { SocialMediaService } from '../social-media.service';
import { followers } from 'src/app/shared/interfaces/followers-following.interface';

@Component({
  selector: 'app-followers-following',
  templateUrl: './followers-following.component.html',
  styleUrls: ['./followers-following.component.css']
})
export class FollowersFollowingComponent {
  followers!: followers[];

  constructor(private socialMediaService:SocialMediaService) { }

  showFollowers() {
    this.socialMediaService.fetchFollowers(7).subscribe({
      next: (data:followers[]) =>{
        this.followers = data
        console.log("data",data)
        console.log("followers",this.followers)
      },
      error: (error:any)=>{
        console.log(error)
      }
    })
  }

  showFollowing() {
    this.socialMediaService.fetchFollowing(8).subscribe({
      next: (data:followers[]) =>{
        this.followers = data
        console.log("data",data)
        console.log("followers",this.followers)
      },
      error: (error:any)=>{
        console.log(error)
      }
    })
  }
}
