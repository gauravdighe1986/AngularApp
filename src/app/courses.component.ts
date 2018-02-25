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

        <!-- CLASS BINDING -->
        <button class="btn btn-primary" [class.active]="isActive">Bootstrap Button</button>

        <br><br>

        <!--PROPERTY BINDING - ITS ONE WAY FROM COMPONENT TO DOM. NOT TO USE WITH INPUT-->
        <img src="{{imageLink1}}" />
        <img [src]="imageLink2"/>

        <br><br>
        <!-- STYLE BINDING -->
        <div [style.backgroundColor]="isActive ? 'pink' : 'white'" >Style Binding</div>
        `
})
export class CoursesComponent {
    isActive = true;
    title = "Training Center";
    title2 = "Courses we offer";
    courses;

    // PROPERTY BINDING - ITS ONE WAY FROM COMPONENT TO DOM
    imageLink1 = `http://media.santabanta.com/medium1/hinduism/lord%20hanuman/lord-hanuman-26a.jpg`;
    imageLink2 = `http://media.santabanta.com/medium1/hinduism/lord%20shiva/lord-shiva-84a.jpg`;

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
