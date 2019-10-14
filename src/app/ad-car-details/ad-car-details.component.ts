import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-ad-car-details',
  templateUrl: './ad-car-details.component.html',
  styleUrls: ['./ad-car-details.component.css']
})
export class AdCarDetailsComponent implements OnInit {

  constructor(private route:Router) { }

  model:any={};


  selectedFile:File=null;

  onFileSelected(File:FileList){
    this.selectedFile = File.item(0);
    var reader= new FileReader();
    reader.onload=(event:any)=>{
    this.model.img=event.target.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }

  save()
  {
    let arr=JSON.parse(localStorage.getItem("carDetails"));
    if(arr==null)
    {
      arr=[];
    }
    arr.push(this.model);
    localStorage.setItem("carDetails",JSON.stringify(arr));
    this.model={};
    alert(" Car Added Successfully");

  }



  onclick(){
    this.route.navigate(['/admin']);
  }
  ngOnInit() {
  }

}
