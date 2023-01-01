import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, User } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  user = {
    Username: '',
    Email:'',
    Password:'',
  }
  constructor(private dataService: DataService,
              private router: Router
              ){}
  ngOnInit() {
  }

  onRegister(Username:string, Email:string, Password:string){
    if(Username!='' && Email!='' && Password!=''){
      this.user.Username=Username;
      this.user.Email=Email;
      this.user.Password=Password;
    console.log(this.user);
    this.dataService.addNewUser(this.user).subscribe(res=>{
    console.log(res);
    })
    this.router.navigate(['LogIn']);
    }else{
      console.log('usuario no valido');
    }
  }
  onSearch(){

  }

  }


