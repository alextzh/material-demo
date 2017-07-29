import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[],field:string, keyword?: string): any {
    if (!field || !keyword){
      return items;
    }
    return items.filter(items => {
      let itemFieldValue = items[field].toLowerCase();
      return itemFieldValue.indexOf(keyword.toLowerCase()) >=0;
    })
  }

}
