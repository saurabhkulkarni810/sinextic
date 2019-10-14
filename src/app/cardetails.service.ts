import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardetailsService {
  carDetails:any[]=[];
  blist;

  constructor(private car:CardetailsService) { }
  getdataFromService(){
    this.carDetails=JSON.parse(localStorage.getItem("adadd"));
    return this.carDetails;
  }
  getupdatedata(code:number){

    this.blist=JSON.parse(localStorage.getItem("adadd"));
    for(let i=0;i<this.blist.length;i++){
      if(i==code)
      {
          return this.blist[i];
      }
    }

  }
}
