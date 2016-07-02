import { Pipe } from 'angular2/core';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterable {
  transform(dict: any): Array<any> {
    console.log('DICT: ', dict);
    var a: any = [];
    for (var key in dict) {
      if (dict.hasOwnProperty(key)) {
        a.push({ key: key, val: dict[key] });
      }
    }
    console.log('AA ', a[0]);
    return a;
  }
}
