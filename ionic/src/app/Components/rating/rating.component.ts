import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component( {
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: [ './rating.component.scss' ],
} )
export class RatingComponent implements OnInit {

  rate = 0;
  rating = [ 1, 2, 3, 4, 5 ];

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  ratingHandler( i ) {
    this.rate = i;
    this.ratingChange.emit( this.rate + 1 );
  }
}


