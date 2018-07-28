import { Component, OnInit } from '@angular/core';
import { FollowerService } from './follower.service';


@Component({
    selector: 'followers',
    templateUrl: './followers.component.html',
    styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

    followers: any[];

    constructor(private service: FollowerService) {


    }

    ngOnInit() {
        this.service.getFollowers()
            .subscribe(
                response => {
                    console.log('HTTP STATUS: ' + response.status);
                    this.followers = response.json();
                });
    }

}
