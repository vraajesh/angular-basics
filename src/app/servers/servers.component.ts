import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server created';
  serverName = '';
  userName = "";
  serverCreated = false;
  servers = ['Testserver1', 'Testserver2'];
  showSecret = true;
  log = [];
  logNumber = 0;
  

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Server name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;    
  }
  getLog() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
  
  
}
