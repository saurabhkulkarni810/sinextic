import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardetailsService } from '../cardetails.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  carlist:any[]=[];
  userlist:any[]=[];
  enquery:string[]=[];
  clickk(){
    this.route.navigate(['/home']);

  }
 // userdetails:any=[];
  cardetails:any=[];
  show: boolean = false;
  clicked() {

    this.route.navigate(['/enq']);
  }

  constructor(private route:Router, private car:CardetailsService) {


  }

  ngOnInit() {
    this.cardetails=this.car.getdataFromService();
  }

}
