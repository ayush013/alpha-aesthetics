import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServerInteractionService {

  constructor(private http: Http) { }

  apiurl = 'http://localhost:3000'

  googleLogin() {
    return this.http.get(`${this.apiurl}/auth/google`)
  }
  
}
