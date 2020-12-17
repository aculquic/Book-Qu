import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for (const book of value){
      if (book.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(book);
      }
    }
    return resultPosts;
  }

}
