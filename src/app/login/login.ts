
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) {
    this.renderer.addClass(document.body, 'login-page');
  }

  ngOnInit(): void {
  }

  signIn(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/admin']);
  }
}
