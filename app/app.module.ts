/* Core Module */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
/**/

/* Components*/
import { baseComponent }  from './app.baseComponent';
import { AuthComponent }  from './app.AuthComponent';
/**/

@NgModule({
  
  imports:      [ BrowserModule, HttpModule, FormsModule,
                  RouterModule.forRoot([
                    { path: '', component: baseComponent, data : {'title' : 'MindMax'} },
                    { path: 'login', component: AuthComponent, data: {'title' : 'Login'} },
                    { path: 'register', component: AuthComponent, data: {'title' : 'Login'} }
                  ])
               ],
  declarations: [ baseComponent, AuthComponent ],
  providers : [HttpModule],
  bootstrap:    [ baseComponent ]
})
export class AppModule { }
