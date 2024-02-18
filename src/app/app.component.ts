import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  togglePanel: boolean;
  constructor(private translateService: TranslateService, private modalService: NgbModal) {
    this.togglePanel = false
    this.translateService.setDefaultLang('en');
    this.translateService.use('en')
  }

  toggle(test: boolean) {
    this.togglePanel = !this.togglePanel
  }


  scrollToTop() {
    var scrollToTopBtn = document.getElementById("scroll-up");
    var rootElement = document.documentElement;
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}
