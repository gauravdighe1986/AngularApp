import { FavoriteComponent } from './favourite/favorite.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';


@NgModule({
    declarations: [
        AppComponent,
        CourseComponent,
        SummaryPipe,
        FavoriteComponent,
        ContactFormComponent,
        CoursesFormComponent,
        SignupFormComponent,
        PostsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule

    ],
    providers: [
        CoursesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
