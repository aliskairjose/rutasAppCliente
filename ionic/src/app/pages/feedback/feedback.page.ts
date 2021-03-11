import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  feedbackFlow = 0;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public userService: UserService,
    
    ) {
      console.log("usfvdgfb rutasdata",userService.rutasData)
    }

  ngOnInit() {
  }

  clickHandler (flow) {
    this.userService.rutasFlow = 0;
    if(flow === 1)
    this.router.navigate(['/sidemenu/Inicio']);
    else this.feedbackFlow = 1;
  }

}
