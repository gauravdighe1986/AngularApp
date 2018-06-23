import { AppError } from './../app-error';
import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Alert } from 'selenium-webdriver';
import { NotFoundError } from '../not-found-error';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    posts: any[];

    constructor(private service: PostService) {
    }

    // Default behaviour will be written here. Here every times a page load http.get is called.
    ngOnInit() {
        this.service.getPosts()
            .subscribe(
                response => {
                    console.log('HTTP STATUS: ' + response.status);
                    this.posts = response.json();
                }, error => {
                    alert('Unexpected error occured.');
                    console.log(error);
                });
    }

    // Adds a post
    createPost(input: HTMLInputElement) {
        console.log('createPost() called: ' + input.value);
        const post = { title: input.value };

        this.service.createPost(post)
            .subscribe(
                response => {
                    console.log('HTTP STATUS: ' + response.status);
                    console.log(response.json());
                    post['id'] = response.json().id;
                    // this will add the post to the first position of the posts array
                    this.posts.splice(0, 0, post);
                }, error => {
                    alert('Unexpected error occured.');
                    console.log(error);
                });

        input.value = '';

    }

    // Update Post
    updatePost(post) {
        console.log('Post called');
        this.service.updatePost(post)
            .subscribe(
                response => {
                    console.log('HTTP STATUS: ' + response.status);
                    console.log(response.json());
                }, error => {
                    alert('Unexpected error occured.');
                    console.log(error);
                });
    }

    // Delete a post
    deletePost(post) {
        console.log('Delete Post called');
        // this.service.deletePost(post.id)
        this.service.deletePost(7878)
            .subscribe(
                response => {
                    console.log('HTTP STATUS: ' + response.status);
                    let index = this.posts.indexOf(post);
                    this.posts.splice(index, 1);
                    console.log(response.json());
                }, (error: Response) => {
                    if (error.status === 404) {
                        alert('This post has already been deleted');
                    } else {
                        alert('Unexpected error occured.');
                        console.log(error);
                    }
                });
    }

}
