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
        <button class="btn btn-primary">Bootstrap Button</button>
        `
})
export class CoursesComponent {
    title = "Training Center";
    title2 = "Courses we offer";
    courses;

    // TIGHTLY COUPLED, ANY CHANGES TO SERVICE CONSTRUCTOR WILL BREAK THE APPLICATION
    // constructor() {
    //     let coursesService = new CoursesService();
    //     this.courses = coursesService.getCourses();
    // }

    // DEPENDECY INJECTION
    // LOOSELY COUPLED, ANY CHANGES TO SERVICE CONSTRUCTOR WILL BE APPLIED @RUNTIME
    // REMEMBER - REGISTER SERVICE AS PROVIDER IN MODULE
    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }

    getTitle2() {
        return this.title2;
    }

}
