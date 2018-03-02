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

        <!-- CLASS BINDING and EVENT BINDING onSave($event) -->
        <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Bootstrap Button</button>

        <br><br>

        <!-- EVENT BUBBLING from child to parent-->
        <div (click)="onDivClicked()">
            <button class="btn btn-primary" (click)="onSave($event)">Event Bubbling</button>
        </div>

        <!-- EVENT FILTERING -->
        <br><br>
        Event Filtering: <input (keyup.enter)="onKeyUp()" />

        <!-- TEMPLATE VARIABLE -->
        <br><br>
        Template Variable: <input type='text' #name (keyup.enter)=onKeyUpName(name.value)/>

        <!-- 2 WAY BINDING. import FORMSMODULE IN app.module.ts -->
        <br><br>
        Two Way Binding: <input [(ngModel)]="city" (keyup.enter)=onKeyUpCity() />

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

    // TWO WAY BINDING
    city = "Dombivli";

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

    onSave($event) {
        console.log("Button Clicked: " + $event)
    }

    onDivClicked() {
        console.log("DIV Clicked !");
    }

    onKeyUp() {
        console.log("ENTER was pressed");
    }

    onKeyUpName(name) {
        console.log(name);
    }

    // 2 WAY BINDING. import FORMSMODULE IN app.module.ts
    onKeyUpCity() {
        console.log(this.city);
    }

}
