import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <h1>{{title}}</h1>
        <h2>{{getTitle2()}}</h2>
        `
})
export class CoursesComponent {
    title = "Training Center";
    title2 = "Courses we offer";

    getTitle2() {
        return this.title2;
    }

}
