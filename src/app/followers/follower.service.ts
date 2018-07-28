import { BadInputError } from './../common/bad-input-error';
import { AppError } from '../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { NotFoundError } from '../common/not-found-error';

@Injectable()
export class FollowerService {
    url = "http://api.github.com/users/mosh-hamedani/followers";

    constructor(private http: Http) {

    }

    getFollowers() {
        return this.http.get(this.url).catch(this.handleError);
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

