import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
updateText(event: any) {
  this.clicked = (<HTMLInputElement>event.target).value;
}

  allowClick = false;
  clicked: string = "Not clicked";

  ngOnInit(): void {

  }

  constructor() {
    setTimeout(() => {
      this.allowClick = true;
    }, 2000);
  }

onClicked(event){
  this.clicked = "Clicked!!";  
  const button = event.target;
  console.log(button);
  console.dir(button);
}

}
