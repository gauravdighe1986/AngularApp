import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <h1>{{title}}</h1>
        <h2>{{getTitle2()}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        `
})
export class CoursesComponent {
    title = "Training Center";
    title2 = "Courses we offer";
    courses = ["Java", "BigData", "Angular4", "ReactJS"];

    getTitle2() {
        return this.title2;
    }

}
