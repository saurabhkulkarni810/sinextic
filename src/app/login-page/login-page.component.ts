import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  mygroup: FormGroup;


  constructor(private routes:Router) { }

  ngOnInit() {
    this.temp=JSON.parse(localStorage.getItem("userdetails"));


    this.mygroup=new FormGroup({
      EmailId:new FormControl('',[Validators.required,Validators.minLength(3)]),
      pass: new FormControl('',[Validators.required]),

    })
  }
  temp:any=[];
  obj:any={};


  login(){
    this.temp=JSON.parse(localStorage.getItem("userdetails"));

    if(this.obj.EmailId=="admin@gmail.com" && this.obj.pass=="admin")
    {
      alert("admin login success");
      this.routes.navigate(['./admin']);
    }
    else{
      for(let i=0; i<this.temp.length;i++){
        if(this.temp[i].EmailId==this.obj.EmailId && this.temp[i].pass==this.obj.pass){
          alert("Consumer loged In Successfully");
          this.routes.navigate(['/user']);
        }else{
          alert("login Unsuccess");
        }
      }
    }
  }
}


