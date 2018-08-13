import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], term: string): any {
        // console.log('pipe');
        if (!items) return;
        if (!term) return items;

        return items.filter(item => this.callback(item, term));
    }

    callback(item, term) {
      if (item.type === null || item.type.length === 0) {
        return false;
      }
      return item.type[0].name === term;
    }
}
