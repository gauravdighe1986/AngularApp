import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

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
    courses;

    constructor() {
        let coursesService = new CoursesService();
        this.courses = coursesService.getCourses();
    }

    getTitle2() {
        return this.title2;
    }

}
