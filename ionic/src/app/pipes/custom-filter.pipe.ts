import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'customFilter'
} )
export class CustomFilterPipe implements PipeTransform {

  transform( items: any[], searchText: string ): any[] {
    console.log( 'customFilterPipe', items );
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
