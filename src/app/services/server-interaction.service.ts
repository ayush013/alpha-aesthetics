import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerInteractionService {

  constructor(private http: Http) { }

  apiurl = 'http://localhost:3000'

  loggedIn = false;

  LoginStatus = new Subject<any>();

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        this.http.get(`${this.apiurl}/api/authguard`)
        .subscribe(
          (response) => { console.log(response)
          if(response.status === 200)
            { 
              this.loggedIn = true;
              this.LoginStatus.next(this.loggedIn)
              resolve(this.loggedIn);
            }
            else {
              reject();
            }
          },
          (error) => console.log(error)
        )
      }
    );
    return promise;
  }

}
