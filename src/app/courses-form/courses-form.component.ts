import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-courses-form',
    templateUrl: './courses-form.component.html',
    styleUrls: ['./courses-form.component.css']
})
export class CoursesFormComponent {

    categories = [
        { id: 1, name: "Development" },
        { id: 2, name: "Security" },
        { id: 3, name: "Marketting" },
    ];

    log(x) {
        console.log(x);
    }
}
