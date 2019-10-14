import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,MinLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-regisration',
  templateUrl: './regisration.component.html',
  styleUrls: ['./regisration.component.css']
})
export class RegisrationComponent implements OnInit {
  registerForm: FormGroup;
  Selectedfile: File= null;

  onlick(){
    this.route.navigate(['/home']);
  }

  constructor(private route: Router  ) { }

  ngOnInit() {

    this.registerForm = new FormGroup({
      Fname :new FormControl('',[Validators.required]),
      Lname: new FormControl('',[Validators.required]),
      Gender:  new FormControl(''),
      monumber:  new FormControl('',[Validators.required,Validators.minLength(10)]),
      EmailId:  new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z)-9]+@[a-zA-Z0-9]+[.][a-zA-Z0-9]+'),Validators.required]),
      pass:  new FormControl('',[Validators.required,Validators.minLength(8)]),


    });
  }

  save(){
    var newarr = JSON.parse(localStorage.getItem("userdetails"));
    if(newarr==null){
      newarr=[];
    }
    newarr.push(this.registerForm.value);
    localStorage.setItem("userdetails",JSON.stringify(newarr));
    alert("added successfully");
    console.log(newarr);


  }


}
