import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router,
    public socialAuthServive: SocialAuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.socialAuthServive.signOut().then(() => this.router.navigate(['login']));
  }
}
