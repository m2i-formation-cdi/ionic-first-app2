import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return  value .split(" ")
                  .map(word => this.capitalize(word))
                  .join(" ");
  }

  private capitalize(word){
    return  word.charAt(0).toUpperCase() 
          + word.substring(1).toLowerCase();
  }

}
