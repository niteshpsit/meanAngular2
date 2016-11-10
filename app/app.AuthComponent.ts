import { Component } from '@angular/core';
import { authService } from './app.authService'; 


@Component({
    selector: 'Register',
    templateUrl: `views/register.html`,
    providers : [authService]
})

export class AuthComponent {
    private user:Object;

    constructor(public _authService:authService){
        this.user = {};
    }

    regisrerUser(){
        console.log(this.user);

        this._authService
        .registerUser()
        .subscribe(
            data => console.log(JSON.stringify(data)),
            Error => console.log("There is an error"),
            () => console.log("Data came")              
        );

    }
 }
