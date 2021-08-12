import { Component, OnInit } from '@angular/core';
import { LOGO } from 'src/app/constants/global-constants';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
} )
export class HeaderComponent implements OnInit {

  logo = LOGO;

  constructor() { }

  ngOnInit() { }

}
