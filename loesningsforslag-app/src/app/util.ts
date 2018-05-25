/*
 *  from https://github.com/Reactive-Extensions/RxJS/blob/8f12f812d497acf639588e90f74d504a9fc801ec/src/core/linq/observable/asobservable.js
 *
 **/
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

export * from 'rxjs/BehaviorSubject';
export function asObservable(subject: Subject<any>): Observable<any> {
    return new Observable((fn: any) => subject.subscribe(fn));
}

export interface ResponseBody extends Response {
    _body: string;
}

export interface IRest {
    links: any;
    timestamp: number;
}

export const parse = (_res: ResponseBody): IRest => {
    let res = JSON.parse(_res._body);
    let ny = Object.assign({}, res);
    ny.links = {}
    delete ny._links;
    Object.keys(res._links)
        .forEach(key => ny.links[key] = stripUrl(res._links[key].href));
    return ny
}

const stripUrl = (url: string): string => url.replace(/mock-rest-server\//, '');