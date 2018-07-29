import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.paramMap
            .subscribe(params => {
                let id = + params.get('id'); // Converting String to int using +
                let username = params.get('username');
                console.log(id + " - " + username);
            });
    }

}
