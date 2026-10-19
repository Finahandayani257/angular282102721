import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  toggleSidebar(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    const body = document.body;
    if (window.innerWidth < 992) {
      body.classList.toggle('sidebar-open');      // mode HP
    } else {
      body.classList.toggle('sidebar-collapse');  // mode desktop
    }
  }
}