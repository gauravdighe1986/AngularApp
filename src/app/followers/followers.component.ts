import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FollowerService } from './follower.service';


@Component({
    selector: 'followers',
    templateUrl: './followers.component.html',
    styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

    followers: any[];

    constructor(private route: ActivatedRoute, private service: FollowerService) {


    }

    ngOnInit() {
        this.route.queryParamMap.subscribe(params => {
            let page = +params.get('page');
            let order = params.get('order');
            console.log('Page: ' + page + ' - ' + "Order: " + order);
        });

        this.service.getFollowers()
            .subscribe(
                response => {
                    console.log('HTTP STATUS: ' + response.status);
                    this.followers = response.json();
                });
    }

}
