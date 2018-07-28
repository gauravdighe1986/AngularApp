import { BadInputError } from './../common/bad-input-error';
import { AppError } from '../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { NotFoundError } from '../common/not-found-error';

@Injectable()
export class PostService {
    url = 'http://jsonplaceholder.typicode.com/posts';
    // url = 'http://jsonplaceholderXXX.typicode.com/posts';

    constructor(private http: Http) {

    }

    getPosts() {
        return this.http.get(this.url).catch(this.handleError);
    }

    createPost(post) {
        return this.http.post(this.url, JSON.stringify(post)).catch(this.handleError);
    }

    updatePost(post) {
        return this.http.put(this.url + '/' + post.id, JSON.stringify(post)).catch(this.handleError);
    }

    deletePost(id) {
        return this.http.delete(this.url + '/' + id).catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 400) {
            return Observable.throw(new BadInputError(error.json()));
        }

        if (error.status === 404) {
            return Observable.throw(new NotFoundError());
        }
        return Observable.throw(new AppError(error));
    }

}
