import { FavoriteComponent } from './favourite/favorite.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';


@NgModule({
    declarations: [
        AppComponent,
        CourseComponent,
        SummaryPipe,
        FavoriteComponent,
        ContactFormComponent,
        CoursesFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        CoursesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
