import { Component } from '@angular/core';
import { NavController, Events } from '@ionic/angular';
import { HelloService } from '../services/hello.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl:NavController, 
              private events:Events,
              private hello:HelloService) {
    events.subscribe("ev", (data)=>{
      console.log("ev capturé");
      console.log(data);
    });
  }

  goToForm(){
    this.navCtrl.navigateForward("/form");
  }

  ionViewDidEnter(){
    console.log(this.hello.greet());
  }

}
