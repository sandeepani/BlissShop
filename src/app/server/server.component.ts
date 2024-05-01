import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl : "./server.component.html",
    styleUrl : "./server.component.css"
})
export class ServerComponent{
    serverId =  130;
    serverStatus : string = "offline";

    getServerStatus(){
        return this.serverStatus;
    }
}