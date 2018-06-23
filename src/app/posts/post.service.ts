import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
    url = 'http://jsonplaceholder.typicode.com/posts';
    // url = 'http://jsonplaceholderXXX.typicode.com/posts';

    constructor(private http: Http) {

    }

    getPosts() {
        return this.http.get(this.url);
    }

    createPost(post) {
        return this.http.post(this.url, JSON.stringify(post));
    }

    updatePost(post) {
        return this.http.put(this.url + '/' + post.id, JSON.stringify(post));
    }

    deletePost(id) {
        return this.http.delete(this.url + '/' + id);
    }

}