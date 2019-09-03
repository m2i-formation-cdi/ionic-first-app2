import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.page.html',
  styleUrls: ['./converter.page.scss'],
})
export class ConverterPage implements OnInit {

  public changeRate:number = 0;

  public yenValue:number = 1;

  public isHidden:boolean = true;

  public buttonActionLabel:string = "Afficher";

  public buttonColor:string = "primary";

  public countries:Array<string> = ["France", "Espagne", "Italie", "Croatie", "Serbie", "Bulgarie"];

  public currencies:Array<{label:string, rate:number, symbol:string}> =
  [
    {label: "Euro", rate: .0086, symbol: "€"},
    {label: "US Dollars", rate: .0094, symbol: "$"},
    {label: "Livre Sterling", rate: .0079, symbol: "£"},
    {label: "Shekel", rate: .033, symbol:"₪"}
  ];

  public selectedCurrency = {
    label: "",
    rate: 0,
    symbol: ""
  };

  constructor() { }

  ngOnInit() {
  }

  showHideForm(color){
    this.isHidden = ! this.isHidden;
    //this.buttonActionLabel = this.isHidden? "Afficher": "Masquer";
    
    if(this.isHidden){
      this.buttonActionLabel = "Afficher";
      this.buttonColor = "primary";
    } else {
      this.buttonActionLabel = "Masquer";
      this.buttonColor = color;
    }
  }

}
