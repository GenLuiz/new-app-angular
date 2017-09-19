import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', element html
  // selector: '[app-servers]' atributo de uma tag e.g <div app-servers></div>
  // selector: '.app-servers' classe html e.g <div class="app-servers"></div>
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
