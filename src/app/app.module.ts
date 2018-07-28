import { FollowerService } from './followers/follower.service';
import { GlobalErrorHandler } from './common/global-error-handler';
import { PostService } from './posts/post.service';
import { FavoriteComponent } from './favourite/favorite.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
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
import { FollowersComponent } from './followers/followers.component';


@NgModule({
    declarations: [
        AppComponent,
        CourseComponent,
        SummaryPipe,
        FavoriteComponent,
        ContactFormComponent,
        CoursesFormComponent,
        SignupFormComponent,
        PostsComponent,
        FollowersComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule

    ],
    providers: [
        CoursesService,
        PostService,
        FollowerService,
        { provide: ErrorHandler, useClass: GlobalErrorHandler }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
