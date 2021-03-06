import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  url = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getusers(){
    return this.http.get(this.url + "/getusers")
  }
  
}
