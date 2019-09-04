import { Component, OnInit } from '@angular/core';
import { NavController, Events } from '@ionic/angular';
import { HelloService } from 'src/app/services/hello.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public name:string = "Clémentine";
  public color = "danger";

  constructor(private navCtrl:NavController, 
    private events:Events,
    private hello:HelloService) { }

  ngOnInit() {
  }

  goBack(){
    this.events.publish("ev", {name:"seb", age: 48});
    this.hello.setName("Ada");
    this.navCtrl.back();
  }

}
