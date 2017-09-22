import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  allowSave = false;
  userName: string = '';
  showDetails = false;
  counter =[];
  details:string = 'You shall not cast';
  constructor() { }

  ngOnInit() {
  }

  onResetUser(){
     this.userName='';
  }

  showMore(){
    this.showDetails = !this.showDetails;
    // this.counter.push(this.counter.length);
    this.counter.push(new Date());
  }

}
