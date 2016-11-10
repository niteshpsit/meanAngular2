import {Injectable, InjectableDecorator} from '@angular/core'; 
import {Http, HttpModule, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class authService{
    private sampleData:any;
    constructor(public _http:Http){}

    public registerUser():Observable<Object>{
       return this._http.get("http://date.jsontest.com")
                        .map(res => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Some error'));
    }
}