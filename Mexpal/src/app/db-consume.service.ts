import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbConsumeService {
  DB='http://localhost:3000/';
  constructor(private readonly http: HttpClient) { }
  consumeUsers(){
    return this.http.get(`${this.DB}/Users`)
  }
}
