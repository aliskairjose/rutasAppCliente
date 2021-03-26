import { Pipe, PipeTransform } from '@angular/core';
import { Route } from '../interfaces/route';

@Pipe( {
  name: 'customeFilter'
} )
export class CustomeFilterPipe implements PipeTransform {

  transform( items: Route[], searchText: string ): Route[] {
    console.log( 'custome', searchText )
    if ( !items ) {
      return [];
    }
    if ( !searchText ) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter( it => it.name.toLocaleLowerCase().includes( searchText ) );
  }

}
