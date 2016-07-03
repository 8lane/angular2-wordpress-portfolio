import { Pipe } from '@angular/core';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterable {
  transform(dict: any): Array<any> {
    var a: any = [];
    for (var key in dict) {
      if (dict.hasOwnProperty(key)) {
        a.push({ key: key, val: dict[key] });
      }
    }
    return a;
  }
}
