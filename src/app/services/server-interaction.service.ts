import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerInteractionService {

  constructor(private http: Http) { }

  apiurl = 'http://localhost:3000'

  loggedIn = true;

  LoginStatus = new Subject<any>();

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        // this.http.get(`${this.apiurl}/api/authguard`)
        // .subscribe(
        //   (response) => { console.log(response)
        //   if(response.status === 200)
        //     { 
        //       this.loggedIn = true;
        //       this.LoginStatus.next(this.loggedIn)
              resolve(this.loggedIn);
            // }
            // else {
            //   this.loggedIn = false;
            //   reject();
            // }
          },
        )
    return promise;
  }

  LogOut() {
     return this.http.get(`${this.apiurl}/api/auth/logout`)
  }

}
