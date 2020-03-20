import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus = false;
  constructor(private socket: Socket) {
  this.checkStatus();
}

checkStatus(){
  this.socket.on('connect', () => {
    console.log('Connectado al servidor');
    this.socketStatus = true;
  });

  this.socket.on('disconnect', () => {
    console.log('desconnectado al servidor');
    this.socketStatus = false;
  });
}
}
