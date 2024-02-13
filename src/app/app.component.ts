import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private translateService: TranslateService, private modalService: NgbModal) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  switchLanguage() {
    this.translateService.use(
      this.translateService.currentLang === 'en' ? 'el' : 'en'
    );
  }


  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
