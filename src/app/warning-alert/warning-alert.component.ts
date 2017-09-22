import { Component, OnInit } from '@angular/core';

// this is a component, the following attributes are obligatory to the component work properly,
// the selector is the tag you have to put in HTML, the templateUrl will be the path to the HTML as is the styleUrls,
// pointing to the css file
// if you want to generate automatically a component just run in command line(terminal) 'ng g c component-name'
@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
