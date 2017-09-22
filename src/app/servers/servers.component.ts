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
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverCreated = false;
  serverName = '';
  servers = ['testserver', 'testserver 2'];
  
  constructor() { 
    setTimeout(() => { this.allowNewServer = true;}, 2000)
  }

  ngOnInit() {
  }
  
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is '+ this.serverName;
  }

  onUpdateServer(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
   }
}
