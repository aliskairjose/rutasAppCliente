import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component( {
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: [ './experience.page.scss' ],
} )
export class ExperiencePage implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    console.log( 'Experience Page' );
  }

}
