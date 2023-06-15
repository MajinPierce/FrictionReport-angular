import { Pipe, PipeTransform } from '@angular/core';
import { weatherIcons } from '../data/weather-icons';

@Pipe({
  name: 'icon'
})
export class IconPipe implements PipeTransform {

  transform(iconId: string): string {
    let icon = weatherIcons.get(iconId);
    if(icon){
      return icon;
    } else {
      return "help";
    }
  }

}
