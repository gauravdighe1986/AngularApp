import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    url = 'http://jsonplaceholder.typicode.com/posts';
    posts: any[];

    constructor(private http: Http) {
    }

    // Default behaviour will be written here. Here every times a page load http.get is called.
    ngOnInit() {
        this.http.get(this.url)
            .subscribe(response => {
                console.log('HTTP STATUS: ' + response.status);
                this.posts = response.json();
            });
    }
    // Adds a post
    createPost(input: HTMLInputElement) {
        console.log('createPost() called: ' + input.value);
        const post = { title: input.value };

        this.http.post(this.url, JSON.stringify(post))
            .subscribe(response => {
                console.log('HTTP STATUS: ' + response.status);
                console.log(response.json());
                post['id'] = response.json().id;
                // this will add the post to the first position of the posts array
                this.posts.splice(0, 0, post);
            });

        input.value = '';

    }

    updatePost(post) {
        console.log('Post called');
        this.http.put(this.url + '/' + post.id, JSON.stringify(post))
            .subscribe(response => {
                console.log('HTTP STATUS: ' + response.status);
                console.log(response.json());
            });
    }

    deletePost(post) {
        console.log('Delete Post called');
        this.http.delete(this.url + '/' + post.id, JSON.stringify(post))
            .subscribe(response => {
                console.log('HTTP STATUS: ' + response.status);
                console.log(response.json())
            });
    }

}
