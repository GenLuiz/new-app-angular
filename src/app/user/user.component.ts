import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  allowSave = false;
  userName: string = '';

  constructor() { }

  ngOnInit() {
  }

  onResetUser(){
     this.userName='';
   }
}
