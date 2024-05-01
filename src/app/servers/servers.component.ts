import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {

  allowClick = false;

  ngOnInit(): void {

  }

  constructor() {
    setTimeout(() => {
      this.allowClick = true;
    }, 2000);
  }

}
