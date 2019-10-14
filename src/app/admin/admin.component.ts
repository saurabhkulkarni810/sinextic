import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  onclick(){
    this.route.navigate(['/home']);
  }
  constructor(private route:Router) { }

  ngOnInit() {
  }

}
