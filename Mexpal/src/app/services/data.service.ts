import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User{
  Id:string,
  UserName:string,
  Email:string,
  Password:string,
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http:HttpClient) {}

    private readonly DB= 'http://localhost:3000/user';

  /*  addNewUser(UserN:string, Mail:string, Pass:string):Observable<User>{
      const body = {UserName:UserN, Email:Mail, Password:Pass };
      return this.http.post<User>(this.DB, body) //posiblemente se necesite array
    }*/
    addNewUser(user:any){
      return this.http.post(`${this.DB}/SignIn`, user);
    }
    getUsers():Observable<User[]>{
      return this.http.get<User[]>(this.DB);
    }

    updateCity(user:User):Observable<void>{
      const body = {User:user.UserName ,Email:user.Email, Password:user.Password };
      return this.http.put<void>(`${this.DB}/${user.Id}`, body);
    }

    deleteCity(id:string): Observable<void>{
      return this.http.delete<void>(`${this.DB}/${id}`);
    }

}
