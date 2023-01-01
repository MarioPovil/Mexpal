import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService, User } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  @Output() userDeleted = new EventEmitter<string>();

  users: User[] = [];
  usuario!: User;

  constructor(private readonly dataServ: DataService){}

  ngOnInit(): void {
    this.dataServ.getUsers().subscribe(res=>{
      this.users=[...res];
    })
  }

  newUser(Name: string, Username:string, password:string):void{
  /*  this.dataServ.addNewUser(Name,Username,password).subscribe(res=>{
      this.users.push(res);
    })*/
  }
  onClear():void{

  }

  DeleteUser(id: string):void{
    this.userDeleted.emit(id);

  }
}
