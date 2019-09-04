import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private name= "toto";

  constructor() { 
    console.log("creation du service");
  }

  public greet(){
    return "Hello "+ this.name;
  }

  public setName(name){
    this.name = name;
  }
}
