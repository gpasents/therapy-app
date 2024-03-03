import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  togglePanel: boolean;
  constructor(private translateService: TranslateService, private modalService: NgbModal,private router: Router) {
    this.togglePanel = false
    this.translateService.setDefaultLang('en');
    this.translateService.use('en')
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    });
  }

  toggle(test: boolean) {
    this.togglePanel = !this.togglePanel
  }

  scrollToTop() {
    const rootElement = document.documentElement;
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}
